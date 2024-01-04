import { ProdutoDto } from "../dtos/produto.dto";
export interface ProdutoRepository {
  
  getAllProdutos(): Promise<ProdutoDto[]>;
  createProduto(dto: ProdutoDto): Promise<ProdutoDto>;
  getProduto(id: number): Promise<ProdutoDto | null>;
  uto(dto: ProdutoDto): Promise<ProdutoDto | null>;
  deleteProduto(id: number): Promise<ProdutoDto | null>;
}
