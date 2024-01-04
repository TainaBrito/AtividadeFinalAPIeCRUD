import { Request, Response } from "express";
import { FindVendaService } from "../services/get.venda.service";

export class FindVendaController {
  constructor(private findVendaService: FindVendaService) {}
  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const { id } = request.params;
      const venda = await this.findVendaService.execute(Number(id));
      return response.json(venda);
    } catch (error) {
      return response.json({ error: error.message });
    }
  }
}
