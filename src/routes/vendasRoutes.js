import express from "express";
import { getAllVendas } from "../controllers/vendasController.js";

const router = express.Router();

router.get("/", getAllVendas);
export default router;
