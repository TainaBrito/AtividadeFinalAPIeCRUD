export class Venda {
  /** Identificador único da venda. */
  id: number;

  /** Identificador do funcionário associado à venda. */
  funcionarioId: number;
  constructor(id: number, funcionarioId: number) {
    this.id = id;
    this.funcionarioId = funcionarioId;
  }
}
