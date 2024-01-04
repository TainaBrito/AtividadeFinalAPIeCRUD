import { Request, Response } from "express";
import { UpdateVendaService } from "../services/update.venda.service";

export class UpdateVendaController {
  constructor(private updateVendaService: UpdateVendaService) {}

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      io

      const { id } = request.params;
      const vendaDTO = request.body;
      const venda = await this.updateVendaService.execute(Number(id), vendaDTO);

      return response.json(venda);
    } catch (error) {
      return response.json({ error: error.message });
    }
  }
}
