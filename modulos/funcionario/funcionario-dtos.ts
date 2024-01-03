import { FuncionarioDto } from "../dtos/funcionario.dto";
import { UpdateFuncionarioService } from "../services/update.funcionario.service";
import { Request, Response } from "express";

export class UpdateFuncionarioController {
  constructor(private readonly service: UpdateFuncionarioService) {}

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const id = Number(request.params.id);

      // Validando se o ID é um número válido
      if (isNaN(id) || id <= 0) {
        return response.status(400).json({ error: "Invalid ID parameter" });
      }

      const funcionarioData: FuncionarioDto = request.body;

      // Validando se os dados do funcionário são válidos
      if (!funcionarioData || Object.keys(funcionarioData).length === 0) {
        return response.status(400).json({ error: "Invalid or empty request body" });
      }

      await this.service.execute(id, funcionarioData);

      return response.json({ message: "Funcionario updated" });
    } catch (error) {
      console.error(error);
      return response.status(500).json({ error: "Internal Server Error" });
    }
  }
}
