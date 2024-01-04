import { Request, Response } from "express";
import { CreateVendaService } from "../services/create.venda.service";

export class CreateVendaController {
  constructor(private createVendaService: CreateVendaService) {}
  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const vendaDTO = request.body;
      const venda = await this.createVendaService.execute(vendaDTO);
      
      return response.status(201).json(venda);
    } catch (error) {
      return response.json({ error: error.message });
    }
  }
}
