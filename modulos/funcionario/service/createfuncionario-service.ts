import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { FuncionarioRepository } from '../repositories/funcionario.repository';
import { FuncionarioDto } from '../dtos/funcionario.dto';

export class CreateFuncionarioService {
  constructor(private readonly repository: FuncionarioRepository) {}

  async execute(funcionario: FuncionarioDto): Promise<{ funcionario: FuncionarioDto; token: string }> {
    try {
      if (!funcionario.senha) {
        throw new Error('Senha is required');
      }

      const hashedPassword = await bcrypt.hash(funcionario.senha, 10);

      funcionario.senha = hashedPassword;

      const createdFuncionario = await this.repository.createFuncionario(funcionario);

      const token = jwt.sign({ id: createdFuncionario.id }, process.env.JWT_SECRET || 'default-secret', {
        expiresIn: '1h',
      });

      return { funcionario: createdFuncionario as FuncionarioDto, token };
    } catch (error) {
      // Tratar erros de bcrypt e jwt aqui
      throw new Error('Error creating funcionario');
    }
  }
}
