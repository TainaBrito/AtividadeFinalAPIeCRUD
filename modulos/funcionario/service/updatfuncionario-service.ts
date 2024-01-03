import bcrypt from 'bcrypt';
import { FuncionarioRepository } from '../repositories/funcionario.repository';
import { FuncionarioDto } from '../dtos/funcionario.dto';
import { FuncionarioMapping } from '../mappings/funcionario.mapping';

export class UpdateFuncionarioService {
  constructor(private readonly repository: FuncionarioRepository) {}

  async execute(id: number, funcionario: Omit<FuncionarioDto, 'id'>): Promise<FuncionarioDto> {
    try {
      if (funcionario.senha) {
        const hashedPassword = await bcrypt.hash(funcionario.senha, 10);
        funcionario.senha = hashedPassword;
      }

      const updatedFuncionarioEntity = await this.repository.updateFuncionario(id, funcionario);

      // Converter FuncionarioEntity para FuncionarioDto antes de retornar
      const updatedFuncionarioDto: FuncionarioDto = FuncionarioMapping.toDto(updatedFuncionarioEntity);

      return updatedFuncionarioDto;
    } catch (error) {
      // Tratando erros de bcrypt aqui
      throw new Error('Error updating funcionario');
    }
  }
}
