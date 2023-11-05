import express from "express";
import {
  getAllBabModule,
  getBabModuleById,
  createBabModule,
  updateBabModule,
  deleteBabModule,
} from "../controllers/BabModuleController.js";
import { verifyUser, verifyAdmin } from "../middleware/AuthUser.js";

const router = express.Router();
router.get("/bab", verifyUser, getAllBabModule);
router.get("/bab/:id", verifyUser, getBabModuleById);
router.post("/bab", verifyAdmin, createBabModule);
router.patch("/bab/:id", verifyAdmin, updateBabModule);
router.delete("/bab/:id", verifyAdmin, deleteBabModule);

export default router;
