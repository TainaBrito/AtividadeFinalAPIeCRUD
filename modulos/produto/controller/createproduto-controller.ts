import { Request, Response } from 'express';
import { CreateProdutoService } from '../services/create.produto.service';

export class CreateProdutoController {
  constructor(private createProdutoService: CreateProdutoService) {}

  async handle(req: Request, res: Response): Promise<Response> {
    try {
      const produto = await this.createProdutoService.execute(req.body);
      return res.status(201).json(produto);
    } catch (error) {
      console.error('Erro ao processar a requisição:', error);
      return res.status(500).json({ error: 'Erro interno do servidor' });
    }
  }
}
