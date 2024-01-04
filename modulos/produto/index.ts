import { CreateProdutoController } from "./controller/create.produto.controller";
import { GetProdutoController } from "./controller/get.produto.controller";
import { UpdateProdutoController } from "./controller/update.produto.controller";
import { DeleteProdutoController } from "./controller/delete.produto.controller";
import { GetAllProdutosController } from "./controller/getall.produto.controller";

import { CreateProdutoService } from "./services/create.produto.service";
import { GetProdutoService } from "./services/get.produto.service";
import { UpdateProdutoService } from "./services/update.produto.service";
import { DeleteProdutoService } from "./services/delete.produto.service";
import { GetAllProdutosService } from "./services/getall.produto.service";

import { ProdutoRepository } from "./repositories/implementations/produto.impl.repository";

// Configuração de instâncias
const repository = new ProdutoRepository();

const createService = new CreateProdutoService(repository);
const createController = new CreateProdutoController(createService);

const getService = new GetProdutoService(repository);
const getController = new GetProdutoController(getService);

const updateService = new UpdateProdutoService(repository);
const updateController = new UpdateProdutoController(updateService);

const deleteService = new DeleteProdutoService(repository);
const deleteController = new DeleteProdutoController(deleteService);

const getAllService = new GetAllProdutosService(repository);
const getAllController = new GetAllProdutosController(getAllService);

// Exportação de instâncias
export {
  createController as createProdutoController,
  getController as getProdutoController,
  updateController as updateProdutoController,
  deleteController as deleteProdutoController,
  getAllController as getAllProdutosController
};
