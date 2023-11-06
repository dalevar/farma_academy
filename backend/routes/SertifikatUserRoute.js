import express from "express";
import {
  getAllSertifikat,
  getSertifikatById,
  createSertifikat,
  deleteSertifikat,
} from "../controllers/SertifikatController.js";

const router = express.Router();
router.get("/sertifikat", getAllSertifikat);
router.get("/sertifikat/:id", getSertifikatById);
router.post("/sertifikat", createSertifikat);
router.delete("/sertifikat/:id",deleteSertifikat);

export default router;
