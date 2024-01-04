import { VendaDTO } from "../dtos/venda.dtos";
import { Venda } from "../entities/venda.entity";

export interface IVendaRepository {
  /**
   * Cria uma nova venda no repositório.
   * @param vendaDTO - Dados da venda a serem criados.
   * @returns Uma Promise que resolve para a venda criada.
   */
  create(vendaDTO: VendaDTO): Promise<Venda>;

  /**
   * Encontra uma venda pelo ID no repositório.
   * @param id - ID da venda a ser encontrada.
   * @returns Uma Promise que resolve para a venda encontrada ou null se não existir.
   */
  findById(id: number): Promise<Venda | null>;

  /**
   * Atualiza uma venda no repositório pelo ID.
   * @param id - ID da venda a ser atualizada.
   * @param vendaDTO - Dados da venda a serem atualizados.
   * @returns Uma Promise que resolve para a venda atualizada ou null se não existir.
   */
  update(id: number, vendaDTO: VendaDTO): Promise<Venda | null>;

  /**
   * Exclui uma venda do repositório pelo ID.
   * @param id - ID da venda a ser excluída.
   * @returns Uma Promise que resolve quando a venda é excluída com sucesso.
   */
  delete(id: number): Promise<void>;
}
