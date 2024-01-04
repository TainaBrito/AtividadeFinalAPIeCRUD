import { ProdutoDto } from "../dtos/produto.dto";
import { ProdutoRepository } from "../repositories/produto.repository";

export class DeleteProdutoService {
  constructor(private produtoRepository: ProdutoRepository) {}

  /**
   * Excluindo um produto com base no ID fornecido.
   * @param id - O ID do produto a ser excluído.
   * @returns Uma Promise que resolve para o ProdutoDto do produto excluído ou nulo se não encontrado.
   */
  async execute(id: number): Promise<ProdutoDto | null> {
    try {
      

      const deletedProduto = await this.produtoRepository.deleteProduto(id);
      return deletedProduto;
    } catch (error) {
      
      throw new Error(`Erro ao excluir produto: ${error.message}`);
    }
  }
}
