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
router.post("/bab", createBabModule);
router.patch("/bab/:id", updateBabModule);
router.delete("/bab/:id", deleteBabModule);

export default router;
