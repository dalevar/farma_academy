import express from "express";
import {
  getAllCommentMateri,
  getCommentMateriById,
  createCommentMateri,
  deleteCommentMateri,
} from "../controllers/CommentMateriController.js";
import { verifyUser } from "../middleware/AuthUser.js";

const router = express.Router();
router.get("/commentmateri",verifyUser, getAllCommentMateri);
router.get("/commentmateri/:id",verifyUser, getCommentMateriById);
router.post("/commentmateri", verifyUser, createCommentMateri);
router.delete("/commentmateri/:id",verifyUser, deleteCommentMateri);

export default router;
