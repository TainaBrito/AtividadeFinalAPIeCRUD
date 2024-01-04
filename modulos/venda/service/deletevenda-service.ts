import { IVendaRepository } from "../repositories/venda.repository";

export class DeleteVendaService {
  constructor(private vendaRepository: IVendaRepository) {}
  async execute(id: number): Promise<void> {
    try {
      await this.vendaRepository.delete(id);
    } catch (error) {
      throw new Error(`Erro ao excluir venda: ${error.message}`);
    }
  }
}
