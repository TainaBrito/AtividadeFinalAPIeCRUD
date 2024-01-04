import { VendaDTO } from "../dtos/venda.dtos";
import { Venda } from "../entities/venda.entity";
import { IVendaRepository } from "../repositories/venda.repository";

export class CreateVendaService {
  constructor(private vendaRepository: IVendaRepository) {}
  async execute(vendaDTO: VendaDTO): Promise<Venda> {
    try {
      const venda = await this.vendaRepository.create(vendaDTO);
      return venda;
    } catch (error) {
      throw new Error(`Erro ao criar venda: ${error.message}`);
    }
  }
}
