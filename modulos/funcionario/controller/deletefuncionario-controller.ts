import { DeleteFuncionarioService } from "../services/delete.funcionario.service";
import { Request, Response } from "express";

export class DeleteFuncionarioController {
  constructor(private readonly service: DeleteFuncionarioService) {}

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      // Extraindo o ID do parâmetro da URL
      const id = Number(request.params.id);

      // Validando se o ID é um número válido
      if (isNaN(id) || id <= 0) {
        return response.status(400).json({ error: "Invalid ID parameter" });
      }

      // Chamando o serviço para excluir o funcionário com o ID fornecido
      await this.service.execute(id);

      // Respondendo com uma mensagem indicando que o funcionário foi excluído
      return response.json({ message: "Funcionario deleted" });
    } catch (error) {
      
      console.error(error);
      return response.status(500).json({ error: "Internal Server Error" });
    }
  }
}

