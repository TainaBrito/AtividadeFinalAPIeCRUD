import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { FuncionarioRepository } from '../repositories/funcionario.repository';

export class AuthService {
  constructor(private funcionarioRepository: FuncionarioRepository) {}

  async login(id: number, senha: string): Promise<{ auth: boolean; token: string }> {
    try {
      const funcionario = await this.funcionarioRepository.getFuncionario(id);

      if (!funcionario || !funcionario.senha || !(await bcrypt.compare(senha, funcionario.senha))) {
        throw new Error('Invalid credentials');
      }

      const token = jwt.sign({ id: funcionario.id }, process.env.JWT_SECRET || 'default-secret', {
        expiresIn: 86400, // expires in 24 hours
      });

      return { auth: true, token: token };
    } catch (error) {
      // Tratando erros de bcrypt e jwt aqui
      throw new Error('Authentication error');
    }
  }
}
