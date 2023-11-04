import express from "express";
import {
  getAllChatKonsul,
  getChatKonsulById,
  createChatKonsul,
  updateChatKonsul,
  deleteChatKonsul,
} from "../controllers/ChatKonsulController.js";

const router = express.Router();
router.get("/chatkonsul", getAllChatKonsul);
router.get("/chatkonsul/:id", getChatKonsulById);
router.post("/chatkonsul", createChatKonsul);
router.patch("/chatkonsul/:id", updateChatKonsul);
router.delete("/chatkonsul/:id",deleteChatKonsul);

export default router;
