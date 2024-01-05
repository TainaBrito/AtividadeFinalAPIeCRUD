import { Router } from 'express';
import MarcaRoutes from './marca.routes';
import FuncionarioRoutes from './funcionario.routes';
import ProdutoRoutes from './produto.routes';
import ItemVendaRoutes from './itemvenda.routes';
import VendaRoutes from './venda.routes';

const routes = Router();

// Agrupamento de rotas relacionadas
routes.use('/vendas', VendaRoutes);
routes.use('/itemsvenda', ItemVendaRoutes);
routes.use('/produtos', ProdutoRoutes);
routes.use('/marcas', MarcaRoutes);
routes.use('/funcionarios', FuncionarioRoutes);

export default routes;
