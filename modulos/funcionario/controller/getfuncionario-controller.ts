import { GetFuncionarioService } from "../services/get.funcionario.service";
import { Request, Response } from "express";

export class GetFuncionarioController {
  constructor(private readonly service: GetFuncionarioService) {}

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      // Extraindo o ID do parâmetro da URL
      const id = Number(request.params.id);

      // Validando se o ID é um número válido
      if (isNaN(id) || id <= 0) {
        return response.status(400).json({ error: "Invalid ID parameter" });
      }

      // Chamando o serviço para obter o funcionário com o ID fornecido
      const funcionario = await this.service.execute(id);

      // Verificar se o funcionário foi encontrado
      if (!funcionario) {
        return response.status(404).json({ error: "Funcionario not found" });
      }

      // Respondendo com os dados do funcionário
      return response.json(funcionario);
    } catch (error) {
      // Tratando erros e responder com um status 500 em caso de falha
      console.error(error);
      return response.status(500).json({ error: "Internal Server Error" });
    }
  }
}
