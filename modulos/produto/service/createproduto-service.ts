import { ProdutoDto } from "../dtos/produto.dto";
import { ProdutoRepository } from "../repositories/produto.repository";

export class CreateProdutoService {
  constructor(private produtoRepository: ProdutoRepository) {}

  /**
   * Criando um novo produto com base nos dados fornecidos.
   * @param dto - Os dados do produto a serem criados.
   * @returns Uma Promise que resolve para o ProdutoDto do produto criado.
   */
  async execute(dto: ProdutoDto): Promise<ProdutoDto> {
    try {
      
      const createdProduto = await this.produtoRepository.createProduto(dto);
      return createdProduto;
    } catch (error) {
      
      throw new Error(`Erro ao criar produto: ${error.message}`);
    }
  }
}
