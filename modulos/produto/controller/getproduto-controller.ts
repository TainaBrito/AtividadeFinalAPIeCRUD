import { Request, Response } from 'express';
import { GetProdutoService } from '../services/get.produto.service';

export class GetProdutoController {
  constructor(private getProdutoService: GetProdutoService) {}

  async handle(req: Request, res: Response): Promise<Response> {
    try {
      // Chamar o serviço para obter o produto pelo ID
      const produto = await this.getProdutoService.execute(Number(req.params.id));

      // Se o produto não for encontrado, retornar um código 404
      if (!produto) {
        return res.status(404).json({ error: 'Produto não encontrado' });
      }

    
      return res.json(produto);
    } catch (error) {
      console.error('Erro ao processar a requisição:', error);
      return res.status(500).json({ error: 'Erro interno do servidor' });
    }
  }
}
