import { ProdutoDto } from "../dtos/produto.dto";
import { ProdutoRepository } from "../repositories/produto.repository";

export class GetAllProdutosService {
  constructor(private produtoRepository: ProdutoRepository) {}
  async execute(): Promise<ProdutoDto[]> {
    try {
      const produtos = await this.produtoRepository.getAllProdutos();
      return produtos;
    } catch (error) {
      throw new Error(`Erro ao obter todos os produtos: ${error.message}`);
    }
  }
}
