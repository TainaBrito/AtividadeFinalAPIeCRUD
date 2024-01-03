import { FuncionarioEntity } from '../entities/funcionario.entity';

export interface FuncionarioRepository {
  createFuncionario(funcionario: Omit<FuncionarioEntity, 'id'>): Promise<FuncionarioEntity>;
  getFuncionario(id: number): Promise<FuncionarioEntity | null>;
  updateFuncionario(id: number, funcionario: Omit<FuncionarioEntity, 'id'>): Promise<FuncionarioEntity>;
  deleteFuncionario(id: number): Promise<void>;
  getAllFuncionarios(): Promise<FuncionarioEntity[]>;
}
