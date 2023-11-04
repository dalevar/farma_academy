import express from "express";
import {
  getAllPayment,
  getPaymentById,
  createPayment,
  updatePayment,
  deletePayment,
} from "../controllers/PaymentController.js";

const router = express.Router();
router.get("/payment", getAllPayment);
router.get("/payment/:id", getPaymentById);
router.post("/payment", createPayment);
router.patch("/payment/:id", updatePayment);
router.delete("/payment/:id",deletePayment);

export default router;
