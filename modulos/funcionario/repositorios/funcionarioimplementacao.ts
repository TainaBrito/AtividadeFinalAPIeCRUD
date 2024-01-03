import { PrismaClient } from "@prisma/client";
import { FuncionarioEntity } from '../../entities/funcionario.entity';
import { FuncionarioMapping } from '../../mappings/funcionario.mapping';
import { FuncionarioRepository } from '../funcionario.repository';

const prisma = new PrismaClient();

export class FuncionarioRepositoryImplementation implements FuncionarioRepository {
  async createFuncionario(funcionario: Omit<FuncionarioEntity, 'id'>): Promise<FuncionarioEntity> {
    const createdFuncionario = await prisma.tbFuncionario.create({
      data: FuncionarioMapping.toDto(funcionario)
    });
    return FuncionarioMapping.toEntity(createdFuncionario);
  }

  async getFuncionario(id: number): Promise<FuncionarioEntity | null> {
  const funcionario = await prisma.tbFuncionario.findUnique({
    where: { id },
  });

  return funcionario ? FuncionarioMapping.toEntity(funcionario) : null;
}
  async updateFuncionario(id: number, funcionario: Omit<FuncionarioEntity, 'id'>): Promise<FuncionarioEntity> {
    const updatedFuncionario = await prisma.tbFuncionario.update({
      where: { id },
      data: FuncionarioMapping.toDto(funcionario)
    });
    return FuncionarioMapping.toEntity(updatedFuncionario);
  }

  async deleteFuncionario(id: number): Promise<void> {
    await prisma.tbFuncionario.delete({
      where: { id }
    });
  }

  async getAllFuncionarios(): Promise<FuncionarioEntity[]> {
    const funcionarios = await prisma.tbFuncionario.findMany();
    return funcionarios.map(FuncionarioMapping.toEntity);
  }
}
