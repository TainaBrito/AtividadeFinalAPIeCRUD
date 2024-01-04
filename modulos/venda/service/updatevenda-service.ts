import { VendaDTO } from "../dtos/venda.dtos";
import { Venda } from "../entities/venda.entity";
import { IVendaRepository } from "../repositories/venda.repository";

export class UpdateVendaService {
  constructor(private vendaRepository: IVendaRepository) {}
  async execute(id: number, vendaDTO: VendaDTO): Promise<Venda | null> {
    try {
      const venda = await this.vendaRepository.update(id, vendaDTO);
      return venda;
    } catch (error) {
      throw new Error(`Erro ao atualizar venda: ${error.message}`);
    }
  }
}
