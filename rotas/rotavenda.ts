import { Router } from "express";
import {
  createController,
  findController,
  updateController,
  deleteController
} from "../modules/venda";

const router = Router();

router.post("/vendas", async (req, res) => {
  try {
    await createController.handle(req, res);
  } catch (error) {
    console.error("Erro ao criar venda:", error);
    res.status(500).json({ error: "Erro interno do servidor" });
  }
});

router.get("/vendas/:id", async (req, res) => {
  try {
    await findController.handle(req, res);
  } catch (error) {
    console.error("Erro ao buscar venda:", error);
    res.status(500).json({ error: "Erro interno do servidor" });
  }
});

router.put("/vendas/:id", async (req, res) => {
  try {
    await updateController.handle(req, res);
  } catch (error) {
    console.error("Erro ao atualizar venda:", error);
    res.status(500).json({ error: "Erro interno do servidor" });
  }
});

router.delete("/vendas/:id", async (req, res) => {
  try {
    await deleteController.handle(req, res);
  } catch (error) {
    console.error("Erro ao excluir venda:", error);
    res.status(500).json({ error: "Erro interno do servidor" });
  }
});

export default router;
