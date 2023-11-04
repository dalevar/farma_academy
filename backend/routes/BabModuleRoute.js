import express from "express";
import {
  getAllBabModule,
  getBabModuleById,
  createBabModule,
  updateBabModule,
  deleteBabModule,
} from "../controllers/BabModuleController.js";

const router = express.Router();
router.get("/babmodule", getAllBabModule);
router.get("/babmodule/:id", getBabModuleById);
router.post("/babmodule", createBabModule);
router.patch("/babmodule/:id", updateBabModule);
router.delete("/babmodule/:id",deleteBabModule);

export default router;
