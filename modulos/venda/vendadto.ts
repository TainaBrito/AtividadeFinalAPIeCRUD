export class VendaDTO {
  /** Identificador único da venda. */
  id: number;

  /** Identificador do funcionário associado à venda. */
  funcionarioId: number;
  /**
   * Construtor da classe VendaDTO.
   * @param id - Identificador único da venda.
   * @param funcionarioId - Identificador do funcionário associado à venda.
   */
  constructor(id: number, funcionarioId: number) {
    this.id = id;
    this.funcionarioId = funcionarioId;
  }
}
