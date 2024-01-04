import { ProdutoDto } from "../dtos/produto.dto";
import { ProdutoRepository } from "../repositories/produto.repository";

export class GetProdutoService {
  constructor(private produtoRepository: ProdutoRepository) {}

  async execute(id: number): Promise<ProdutoDto | null> {
    try {
      const produto = await this.produtoRepository.getProduto(id);
      return produto;
    } catch (error) {
      throw new Error(`Erro ao obter produto: ${error.message}`);
    }
  }
}
