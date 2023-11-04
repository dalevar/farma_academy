import express from "express";
import {
  getAllStatusPremium,
  getStatusPremiumById,
  createStatusPremium,
  updateStatusPremium,
  deleteStatusPremium,
} from "../controllers/StatusPremiumController.js";

const router = express.Router();
router.get("/statusPremium", getAllStatusPremium);
router.get("/statusPremium/:id", getStatusPremiumById);
router.post("/statusPremium", createStatusPremium);
router.patch("/statusPremium/:id", updateStatusPremium);
router.delete("/statusPremium/:id",deleteStatusPremium);

export default router;
