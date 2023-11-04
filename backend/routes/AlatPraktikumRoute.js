import express from "express";
import {
  getAllAlatPraktikum,
  getAlatPraktikumById,
  createAlatPraktikum,
  updateAlatPraktikum,
  deleteAlatPraktikum,
} from "../controllers/AlatPraktikumController.js";

const router = express.Router();
router.get("/alatpraktikum", getAllAlatPraktikum);
router.get("/alatpraktikum/:id", getAlatPraktikumById);
router.post("/alatpraktikum", createAlatPraktikum);
router.patch("/alatpraktikum/:id", updateAlatPraktikum);
router.delete("/alatpraktikum/:id",deleteAlatPraktikum);

export default router;
