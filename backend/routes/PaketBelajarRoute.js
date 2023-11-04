import express from "express";
import {
  getAllPaketBelajar,
  getPaketBelajarById,
  createPaketBelajar,
  updatePaketBelajar,
  deletePaketBelajar,
} from "../controllers/PaketBelajarController.js";

const router = express.Router();
router.get("/paketbelajar", getAllPaketBelajar);
router.get("/paketbelajar/:id", getPaketBelajarById);
router.post("/paketbelajar", createPaketBelajar);
router.patch("/paketbelajar/:id", updatePaketBelajar);
router.delete("/paketbelajar/:id",deletePaketBelajar);

export default router;
