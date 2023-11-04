import express from "express";
import {
  getAllModule,
  getModuleById,
  createModule,
  updateModule,
  deleteModule,
} from "../controllers/ModuleController.js";

const router = express.Router();
router.get("/module", getAllModule);
router.get("/module/:id", getModuleById);
router.post("/module", createModule);
router.patch("/module/:id", updateModule);
router.delete("/module/:id",deleteModule);

export default router;
