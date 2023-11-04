import express from "express";
import {
  getAllMateriVideo,
  getMateriVideoById,
  createMateriVideo,
  updateMateriVideo,
  deleteMateriVideo,
} from "../controllers/MateriVideoController.js";

const router = express.Router();
router.get("/materivideo", getAllMateriVideo);
router.get("/materivideo/:id", getMateriVideoById);
router.post("/materivideo", createMateriVideo);
router.patch("/materivideo/:id", updateMateriVideo);
router.delete("/materivideo/:id",deleteMateriVideo);

export default router;
