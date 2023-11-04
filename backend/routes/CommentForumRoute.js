import express from "express";
import {
  getAllCommentForum,
  getCommentForumById,
  createCommentForum,
  updateCommentForum,
  deleteCommentForum,
} from "../controllers/CommentForumController.js";

const router = express.Router();
router.get("/commentforum", getAllCommentForum);
router.get("/commentforum/:id", getCommentForumById);
router.post("/commentforum", createCommentForum);
router.patch("/commentforum/:id", updateCommentForum);
router.delete("/commentforum/:id",deleteCommentForum);

export default router;
