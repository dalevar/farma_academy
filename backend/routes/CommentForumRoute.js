import express from "express";
import {
  getAllCommentForum,
  getCommentForumById,
  createCommentForum,
  deleteCommentForum,
} from "../controllers/CommentForumController.js";
import { verifyUser } from "../middleware/AuthUser.js";

const router = express.Router();
router.get("/commentforum",verifyUser, getAllCommentForum);
router.get("/commentforum/:id",verifyUser, getCommentForumById);
router.post("/commentforum", verifyUser, createCommentForum);
router.delete("/commentforum/:id",verifyUser, deleteCommentForum);

export default router;
