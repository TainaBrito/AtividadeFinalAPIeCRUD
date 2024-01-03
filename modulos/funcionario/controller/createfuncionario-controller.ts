import { FuncionarioDto } from "../dtos/funcionario.dto";
import { CreateFuncionarioService } from "../services/create.funcionario.service";
import { Request, Response } from "express";

export class CreateFuncionarioController {
  constructor(private readonly service: CreateFuncionarioService) { }

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      // Extraindo dados do funcionário do corpo da requisição
      const funcionario: FuncionarioDto = request.body;

      // Chamando o serviço para criar o funcionário
      const result = await this.service.execute(funcionario);

      // Configurando o header de autenticação, se aplicável
      if (result.token) {
        response.setHeader('Authorization', `Bearer ${result.token}`);
      }

      // Respondendo com uma mensagem indicando que o funcionário foi criado
      return response.status(201).json({ message: "Funcionario created" });
    } catch (error) {
      // Tratando erros e responder com um status 500 em caso de falha
      console.error(error);
      return response.status(500).json({ error: "Internal Server Error" });
    }
  }
}
