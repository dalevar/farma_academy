import express from "express";
import {
  getAllKelas,
  getKelasById,
  createKelas,
  updateKelas,
  deleteKelas,
} from "../controllers/KelasController.js";

const router = express.Router();
router.get("/kelas", getAllKelas);
router.get("/kelas/:id", getKelasById);
router.post("/kelas", createKelas);
router.patch("/kelas/:id", updateKelas);
router.delete("/kelas/:id",deleteKelas);

export default router;
