import express from "express";
import {
  getAllChatKonsul,
  getChatKonsulById,
  createChatKonsul,
  deleteChatKonsul,
} from "../controllers/ChatKonsulController.js";
import { verifyUser, verifyAdmin } from "../middleware/AuthUser.js";

const router = express.Router();
router.get("/chatkonsul", verifyUser, getAllChatKonsul);
router.get("/chatkonsul/:id", verifyUser, getChatKonsulById);
router.post("/chatkonsul", verifyUser, createChatKonsul);
router.delete("/chatkonsul/:id", verifyAdmin, deleteChatKonsul);

export default router;
