import express from "express";
import {
  getAllForum,
  getForumById,
  createForum,
  updateForum,
  updateLike,
  deleteForum,
} from "../controllers/ForumController.js";
import { verifyUser } from "../middleware/AuthUser.js";
const router = express.Router();
router.get("/forum", verifyUser, getAllForum);
router.get("/forum/:id", verifyUser, getForumById);
router.post("/forum", verifyUser, createForum);
router.patch("/forum/:id", verifyUser, updateForum);
router.patch("/like/:id", verifyUser, updateLike)
router.delete("/forum/:id", verifyUser, deleteForum);

export default router;
