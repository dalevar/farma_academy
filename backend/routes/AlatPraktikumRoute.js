import express from "express";
import {
  getAllAlatPraktikum,
  getAlatPraktikumById,
  createAlatPraktikum,
  updateAlatPraktikum,
  deleteAlatPraktikum,
} from "../controllers/AlatPraktikumController.js";
import { verifyUser, verifyAdmin } from "../middleware/AuthUser.js";
const router = express.Router();
router.get("/alatpraktikum", verifyUser, getAllAlatPraktikum);
router.get("/alatpraktikum/:id", verifyUser, getAlatPraktikumById);
router.post("/alatpraktikum", verifyAdmin, createAlatPraktikum);
router.patch("/alatpraktikum/:id", verifyAdmin, updateAlatPraktikum);
router.delete("/alatpraktikum/:id", verifyAdmin, deleteAlatPraktikum);

export default router;
