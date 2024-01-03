import { FuncionarioDto } from "../dtos/funcionario.dto";
import { AuthService } from "../services/auth.services";
import { Request, Response } from "express";

export class AuthController {
  constructor(private readonly authService: AuthService) {}

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const { id, senha }: FuncionarioDto = request.body;

      // Verificando se id e senha estão presentes na requisição
      if (!id || !senha) {
        return response.status(400).json({ error: "Invalid request. 'id' and 'senha' are required." });
      }

      const result = await this.authService.login(id, senha);

      // Configurando o header de autenticação
      response.setHeader('Authorization', `Bearer ${result.token}`);

      // Responder com o token e indicar autenticação bem-sucedida
      return response.json({ auth: true, token: result.token });
    } catch (err) {
      // Tratando erros e responder com status 401 se a autenticação falhar
      return response.status(401).json({ error: err.message });
    }
  }
}
