import { Router, Request, Response } from "express";
import {
  createController,
  getController,
  updateController,
  deleteController,
  getAllController,
  ControllerAuth
} from "../modules/funcionario";
import { validateJWT } from "../middleware/auth.middleware"; 

const routes = Router();

routes.post('/login', async (req: Request, res: Response) => {
  try {
    await ControllerAuth.handle(req, res);
  } catch (error) {
    console.error("Erro no login:", error);
    res.status(500).json({ error: "Erro interno do servidor" });
  }
});

routes.post('/funcionario', async (req: Request, res: Response) => {
  try {
    await createController.handle(req, res);
  } catch (error) {
    console.error("Erro ao criar funcionário:", error);
    res.status(500).json({ error: "Erro interno do servidor" });
  }
});

routes.get('/funcionario/', validateJWT, async (req: Request, res: Response) => {
  try {
    await getAllController.handle(req, res);
  } catch (error) {
    console.error("Erro ao obter todos os funcionários:", error);
    res.status(500).json({ error: "Erro interno do servidor" });
  }
});

routes.get('/funcionario/:id', validateJWT, async (req: Request, res: Response) => {
  try {
    await getController.handle(req, res);
  } catch (error) {
    console.error("Erro ao obter funcionário por ID:", error);
    res.status(500).json({ error: "Erro interno do servidor" });
  }
});

routes.put('/funcionario/:id', validateJWT, async (req: Request, res: Response) => {
  try {
    await updateController.handle(req, res);
  } catch (error) {
    console.error("Erro ao atualizar funcionário:", error);
    res.status(500).json({ error: "Erro interno do servidor" });
  }
});

routes.delete('/funcionario/:id', validateJWT, async (req: Request, res: Response) => {
  try {
    await deleteController.handle(req, res);
  } catch (error) {
    console.error("Erro ao excluir funcionário:", error);
    res.status(500).json({ error: "Erro interno do servidor" });
  }
});

export default routes;
