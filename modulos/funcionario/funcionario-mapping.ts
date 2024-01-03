import { FuncionarioDto } from "../dtos/funcionario.dto";
import { FuncionarioEntity } from "../entities/funcionario.entity";

export class FuncionarioMapping {
  static from(funcionarioDto: FuncionarioDto): FuncionarioEntity {
    return {
      id: funcionarioDto.id,
      nome: funcionarioDto.nome,
      senha: funcionarioDto.senha
    };
  }

  static toDto(funcionarioEntity: FuncionarioEntity): FuncionarioDto {
    return {
      id: funcionarioEntity.id,
      nome: funcionarioEntity.nome,
      senha: funcionarioEntity.senha
    };
  }
}

  static toEntity(funcionarioDto: FuncionarioDto): FuncionarioEntity {
    return {
      id: funcionarioDto.id,
      nome: funcionarioDto.nome,
      senha: funcionarioDto.senha
      
    }
  }
