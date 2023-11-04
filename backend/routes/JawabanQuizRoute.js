import express from "express";
import {
  getAllJawabanQuiz,
  getJawabanQuizById,
  createJawabanQuiz,
  updateJawabanQuiz,
  deleteJawabanQuiz,
} from "../controllers/JawabanQuizController.js";

const router = express.Router();
router.get("/jawabanquiz", getAllJawabanQuiz);
router.get("/jawabanquiz/:id", getJawabanQuizById);
router.post("/jawabanquiz", createJawabanQuiz);
router.patch("/jawabanquiz/:id", updateJawabanQuiz);
router.delete("/jawabanquiz/:id",deleteJawabanQuiz);

export default router;
