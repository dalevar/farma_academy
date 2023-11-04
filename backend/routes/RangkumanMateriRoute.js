import express from "express";
import {
  getAllRangkumanMateri,
  getRangkumanMateriById,
  createRangkumanMateri,
  updateRangkumanMateri,
  deleteRangkumanMateri,
} from "../controllers/RangkumanMateriController.js";

const router = express.Router();
router.get("/rangkumanmateri", getAllRangkumanMateri);
router.get("/rangkumanmateri/:id", getRangkumanMateriById);
router.post("/rangkumanmateri", createRangkumanMateri);
router.patch("/rangkumanmateri/:id", updateRangkumanMateri);
router.delete("/rangkumanmateri/:id",deleteRangkumanMateri);

export default router;
