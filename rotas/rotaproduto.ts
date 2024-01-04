import express from 'express';
import {
  createProdutoController,
  getProdutoController,
  updateProdutoController,
  deleteProdutoController,
  getAllProdutosController
} from '../modules/produto/';
import { validateJWT } from '../middleware/auth.middleware';

const router = express.Router();

router.post('/produtos', validateJWT, async (req, res) => {
  await createProdutoController.handle(req, res);
});

router.get('/produtos/:id', validateJWT, async (req, res) => {
  await getProdutoController.handle(req, res);
});

router.put('/produtos/:id', validateJWT, async (req, res) => {
  await updateProdutoController.handle(req, res);
});

router.delete('/produtos/:id', validateJWT, async (req, res) => {
  await deleteProdutoController.handle(req, res);
});

router.get('/produtos', validateJWT, async (req, res) => {
  await getAllProdutosController.handle(req, res);
});

export default router;
