import express from "express";
import {
  getAllSertifikat,
  getSertifikatById,
  createSertifikat,
  updateSertifikat,
  deleteSertifikat,
} from "../controllers/SertifikatController.js";

const router = express.Router();
router.get("/sertifikat", getAllSertifikat);
router.get("/sertifikat/:id", getSertifikatById);
router.post("/sertifikat", createSertifikat);
router.patch("/sertifikat/:id", updateSertifikat);
router.delete("/sertifikat/:id",deleteSertifikat);

export default router;
