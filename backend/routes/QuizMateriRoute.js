import express from "express";
import {
  getAllQuizMateri,
  getQuizMateriById,
  createQuizMateri,
  updateQuizMateri,
  deleteQuizMateri,
} from "../controllers/QuizMateriController.js";

const router = express.Router();
router.get("/quizmateri", getAllQuizMateri);
router.get("/quizmateri/:id", getQuizMateriById);
router.post("/quizmateri", createQuizMateri);
router.patch("/quizmateri/:id", updateQuizMateri);
router.delete("/quizmateri/:id",deleteQuizMateri);

export default router;
