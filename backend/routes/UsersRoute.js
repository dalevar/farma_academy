import express from "express";
import {
  getAllUser,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
} from "../controllers/UserController.js";

const router = express.Router();
router.get("/user", getAllUser);
router.get("/user/:nis", getUserById);
router.post("/user", createUser);
router.patch("/user/:nis", updateUser);
router.delete("/user/:nis",deleteUser);

export default router;
