import { Request, Response } from 'express';
import { UpdateProdutoService } from '../services/update.produto.service';

export class UpdateProdutoController {
  constructor(private updateProdutoService: UpdateProdutoService) {}

  async handle(req: Request, res: Response): Promise<Response> {
    try {
      
      const { id, ...dadosProduto } = req.body;

      // Chamando o serviço para atualizar o produto
      const produto = await this.updateProdutoService.execute(id, dadosProduto);

      // Retornando o resultado
      return res.json(produto);
    } catch (error) {
      console.error('Erro ao processar a requisição:', error);
      return res.status(500).json({ error: 'Erro interno do servidor' });
    }
  }
}
