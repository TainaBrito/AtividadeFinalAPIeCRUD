import { VendaDTO } from "../dtos/venda.dtos";
import { Venda } from "../entities/venda.entity";

export class VendaMapping {
  /**
   * Converte um objeto VendaDTO para Venda.
   * @param vendaDTO - Objeto VendaDTO a ser convertido.
   * @returns Objeto Venda resultante.
   */
  static from(vendaDTO: VendaDTO): Venda {
    return {
      id: vendaDTO.id,
      funcionarioId: vendaDTO.funcionarioId
    };
  }

  /**
   * Converte um objeto Venda para VendaDTO.
   * @param venda - Objeto Venda a ser convertido.
   * @returns Objeto VendaDTO resultante.
   */
  static to(venda: Venda): VendaDTO {
    return {
      id: venda.id,
      funcionarioId: venda.funcionarioId
    };
  }
}
