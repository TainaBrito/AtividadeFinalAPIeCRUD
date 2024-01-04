import { ProdutoEntity } from '../entities/produto.entity';
import { ProdutoDto } from '../dtos/produto.dto';

export class ProdutoMapping {
  static dtoToEntity(dto: ProdutoDto | null | undefined): ProdutoEntity | null {
    if (!dto) {
      return null;
    }

    const produto = new ProdutoEntity(dto.id, dto.nome, dto.preco);
    return produto;
  }

  static entityToDto(entity: ProdutoEntity | null | undefined): ProdutoDto | null {
    if (!entity) {
      return null;
    }

    const dto = new ProdutoDto();
    dto.id = entity.id;
    dto.nome = entity.nome;
    dto.preco = entity.preco;
    return dto;
  }
}
