import { Venda } from "../entities/venda.entity";
import { IVendaRepository } from "../repositories/venda.repository";

export class FindVendaService {
  constructor(private vendaRepository: IVendaRepository) {}
  async execute(id: number): Promise<Venda | null> {
    try {
      const venda = await this.vendaRepository.findById(id);
      return venda;
    } catch (error) {
      throw new Error(`Erro ao encontrar venda: ${error.message}`);
    }
  }
}
