import { CreateFuncionarioController } from "./controller/create.funcionario.controller";
import { GetFuncionarioController } from "./controller/get.funcionario.controller";
import { UpdateFuncionarioController } from "./controller/update.get.funcionario.controller";
import { DeleteFuncionarioController } from "./controller/delete.funcionario.controller";
import { GetAllFuncionarioController } from "./controller/getall.funcionario.controller";
import { AuthController } from "./controller/auth.funcionario.controller";

import { AuthService } from "./services/auth.services";
import { CreateFuncionarioService } from "./services/create.funcionario.service";
import { GetFuncionarioService } from "./services/get.funcionario.service";
import { UpdateFuncionarioService } from "./services/update.funcionario.service";
import { DeleteFuncionarioService } from "./services/delete.funcionario.service";
import { GetAllFuncionarioService } from "./services/getall.funcionario.service";

import { FuncionarioRepositoryImplementation } from "./repositories/implementations/funcionario.implrepository";

// Utilizando a injeção de dependência para criar instâncias
const repository = new FuncionarioRepositoryImplementation();

const createService = new CreateFuncionarioService(repository);
const createController = new CreateFuncionarioController(createService);

const getService = new GetFuncionarioService(repository);
const getController = new GetFuncionarioController(getService);

const updateService = new UpdateFuncionarioService(repository);
const updateController = new UpdateFuncionarioController(updateService);

const deleteService = new DeleteFuncionarioService(repository);
const deleteController = new DeleteFuncionarioController(deleteService);

const getAllService = new GetAllFuncionarioService(repository);
const getAllController = new GetAllFuncionarioController(getAllService);

const authService = new AuthService(repository);
const authController = new AuthController(authService);

// Exportando os controladores
export {
  createController,
  getController,
  updateController,
  deleteController,
  getAllController,
  authController,
};
