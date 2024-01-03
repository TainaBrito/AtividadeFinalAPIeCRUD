import { GetAllFuncionarioService } from "../services/getall.funcionario.service";
import { Request, Response } from "express";

export class GetAllFuncionarioController {
  constructor(private readonly service: GetAllFuncionarioService) { }

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      // Chamando o serviço para obter todos os funcionários
      const funcionarios = await this.service.execute();

      // Respondendo com a lista de funcionários
      return response.json(funcionarios);
    } catch (error) {
      // Tratando erros e respondendo com um status 500 em caso de falha
      console.error(error);
      return response.status(500).json({ error: "Internal Server Error" });
    }
  }
}
