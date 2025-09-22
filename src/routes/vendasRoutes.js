import express from "express";
import { getAllVendas, getById } from "../controllers/vendasController.js";

const router = express.Router();

router.get("/", getAllVendas); //GetAll
router.get("/:id", getById);

export default router;
