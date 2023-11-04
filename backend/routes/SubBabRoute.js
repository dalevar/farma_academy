import express from "express";
import {
  getAllSubBab,
  getSubBabById,
  createSubBab,
  updateSubBab,
  deleteSubBab,
} from "../controllers/SubBabController.js";

const router = express.Router();
router.get("/subbab", getAllSubBab);
router.get("/subbab/:id", getSubBabById);
router.post("/subbab", createSubBab);
router.patch("/subbab/:id", updateSubBab);
router.delete("/subbab/:id",deleteSubBab);

export default router;
