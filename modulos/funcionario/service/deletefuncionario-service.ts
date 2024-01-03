import { FuncionarioRepository } from "../repositories/funcionario.repository";

export class DeleteFuncionarioService {
  constructor(private readonly repository: FuncionarioRepository) {}

  async execute(id: number): Promise<void> {
    try {
      await this.repository.deleteFuncionario(id);
     
    } catch (error) {
     
      throw new Error(`Error deleting funcionario with id ${id}`);
    }
  }
}
