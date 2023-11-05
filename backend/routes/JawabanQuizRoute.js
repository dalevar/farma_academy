import express from "express";
import {
  getAllJawabanQuiz,
  getJawabanQuizById,
  createJawabanQuiz,
  updateJawabanQuiz,
  deleteJawabanQuiz,
} from "../controllers/JawabanQuizController.js";
import { verifyUser, verifyAdmin } from "../middleware/AuthUser.js";
const router = express.Router();
router.get("/jawabanquiz", verifyUser, getAllJawabanQuiz);
router.get("/jawabanquiz/:id", verifyUser, getJawabanQuizById);
router.post("/jawabanquiz", verifyAdmin, createJawabanQuiz);
router.patch("/jawabanquiz/:id", verifyAdmin, updateJawabanQuiz);
router.delete("/jawabanquiz/:id", verifyAdmin, deleteJawabanQuiz);

export default router;
