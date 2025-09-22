import express from "express";
import { getAllVendas, getById, createDadosVendas } from "../controllers/vendasController.js";

const router = express.Router();

router.get("/", getAllVendas); //GetAll rota
router.get("/:id", getById); //GetById rota
router.post("/", createDadosVendas); //create rota

export default router;
