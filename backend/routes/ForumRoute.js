import express from "express";
import {
  getAllForum,
  getForumById,
  createForum,
  updateForum,
  deleteForum,
} from "../controllers/ForumController.js";

const router = express.Router();
router.get("/forum", getAllForum);
router.get("/forum/:id", getForumById);
router.post("/forum", createForum);
router.patch("/forum/:id", updateForum);
router.delete("/forum/:id",deleteForum);

export default router;
