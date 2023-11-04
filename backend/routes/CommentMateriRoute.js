import express from "express";
import {
  getAllCommentMateri,
  getCommentMateriById,
  createCommentMateri,
  updateCommentMateri,
  deleteCommentMateri,
} from "../controllers/CommentMateriController.js";

const router = express.Router();
router.get("/commentmateri", getAllCommentMateri);
router.get("/commentmateri/:id", getCommentMateriById);
router.post("/commentmateri", createCommentMateri);
router.patch("/commentmateri/:id", updateCommentMateri);
router.delete("/commentmateri/:id",deleteCommentMateri);

export default router;
