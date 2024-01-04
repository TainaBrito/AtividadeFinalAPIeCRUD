import { CreateVendaController, FindVendaController, UpdateVendaController, DeleteVendaController } from "./controllers";
import { CreateVendaService, FindVendaService, UpdateVendaService, DeleteVendaService } from "./services";
import { VendaRepository } from "./repositories";
import { VendaRepository } from "./implementions/venda.Implrepository";
import { CreateVendaService } from "./create.venda.service";
import { FindVendaService } from "./get.venda.service";
import { UpdateVendaService } from "./update.venda.service";
import { DeleteVendaService } from "./delete.venda.service";

const repository = new VendaRepository();

const createService = new CreateVendaService(repository);
const createController = new CreateVendaController(createService);

const findService = new FindVendaService(repository);
const findController = new FindVendaController(findService);

const updateService = new UpdateVendaService(repository);
const updateController = new UpdateVendaController(updateService);

const deleteService = new DeleteVendaService(repository);
const deleteController = new DeleteVendaController(deleteService);

export { CreateVendaService, FindVendaService, UpdateVendaService, DeleteVendaService };
export { VendaRepository };
export { createController, findController, updateController, deleteController };
