import { PrismaClient } from "@prisma/client";
import { VendaDTO } from "../../dtos/venda.dtos";
import { Venda } from "../../entities/venda.entity";
import { VendaMapping } from "../../mappings/venda.mapping";
import { IVendaRepository } from "../venda.repository";

const prisma = new PrismaClient();

export class VendaRepository implements IVendaRepository {
  constructor(private prisma: PrismaClient) {}

  async create(vendaDTO: VendaDTO): Promise<Venda> {
    try {
      const venda = await this.prisma.tbVendas.create({
        data: VendaMapping.from(vendaDTO)
      });
      return VendaMapping.to(venda);
    } catch (error) {
      throw new Error(`Erro ao criar venda: ${error.message}`);
    }
  }

  async findById(id: number): Promise<Venda | null> {
    try {
      const venda = await this.prisma.tbVendas.findUnique({
        where: { id }
      });
      return venda ? VendaMapping.to(venda) : null;
    } catch (error) {
      throw new Error(`Erro ao encontrar venda: ${error.message}`);
    }
  }

  async update(id: number, vendaDTO: VendaDTO): Promise<Venda | null> {
    try {
      const venda = await this.prisma.tbVendas.update({
        where: { id },
        data: VendaMapping.from(vendaDTO)
      });
      return venda ? VendaMapping.to(venda) : null;
    } catch (error) {
      throw new Error(`Erro ao atualizar venda: ${error.message}`);
    }
  }

  async delete(id: number): Promise<void> {
    try {
      await this.prisma.tbVendas.delete({ where: { id } });
    } catch (error) {
      throw new Error(`Erro ao excluir venda: ${error.message}`);
    }
  }
}
