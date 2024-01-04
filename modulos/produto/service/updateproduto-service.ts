import { ProdutoDto } from "../dtos/produto.dto";
import { ProdutoRepository } from "../repositories/produto.repository";

export class UpdateProdutoService {
  constructor(private produtoRepository: ProdutoRepository) {}

  /**
   * Atualizando um produto com base nos dados fornecidos.
   * @param dto - Os dados do produto a serem atualizados.
   * @returns Uma Promise que resolve para o ProdutoDto do produto atualizado ou nulo se não encontrado.
   */
  async execute(dto: ProdutoDto): Promise<ProdutoDto | null> {
    try {
     
      const updatedProduto = await this.produtoRepository.updateProduto(dto);
      return updatedProduto;
    } catch (error) {
      throw new Error(`Erro ao atualizar produto: ${error.message}`);
    }
  }
}
