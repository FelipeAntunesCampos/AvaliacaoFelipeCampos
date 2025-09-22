import express from "express";
import { getAllVendas, getById, createDadosVendas, deleteDadosVendas, updateDadosVendas } from "../controllers/vendasController.js";

const router = express.Router();

router.get("/", getAllVendas); //GetAll rota
router.get("/:id", getById); //GetById rota
router.post("/", createDadosVendas); //create rota
router.delete("/:id", deleteDadosVendas); //Delete Rota
router.put("/:id", updateDadosVendas); //Update dados vendas

export default router;
