import { FuncionarioDto } from "../dtos/funcionario.dto";
import { UpdateFuncionarioService } from "../services/update.funcionario.service";
import { Request, Response } from "express";

export class UpdateFuncionarioController {
  constructor(private readonly service: UpdateFuncionarioService) {}

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      // Extraindo o ID do parâmetro da URL
      const id = Number(request.params.id);

      // Validando se o ID é um número válido
      if (isNaN(id) || id <= 0) {
        return response.status(400).json({ error: "Invalid ID parameter" });
      }

      // Extraindo os dados do funcionário do corpo da requisição
      const funcionarioData: FuncionarioDto = request.body;

      // Chamando o serviço para atualizar o funcionário com o ID fornecido
      await this.service.execute(id, funcionarioData);

      // Respondendo com uma mensagem indicando que o funcionário foi atualizado
      return response.json({ message: "Funcionario updated" });
    } catch (error) {
      
      console.error(error);
      return response.status(500).json({ error: "Internal Server Error" });
    }
  }
}
