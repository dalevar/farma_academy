import express from "express";
import {
  getAllMateri,
  getMateriById,
  createMateri,
  updateMateri,
  deleteMateri,
} from "../controllers/MateriController.js";

const router = express.Router();
router.get("/materi", getAllMateri);
router.get("/materi/:id", getMateriById);
router.post("/materi", createMateri);
router.patch("/materi/:id", updateMateri);
router.delete("/materi/:id",deleteMateri);

export default router;
