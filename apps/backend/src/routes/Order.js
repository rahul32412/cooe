import express from "express";
import { getAllOrders, updateOrder } from "../controllers/Order.js";

const router = express.Router();
router.get("/get", getAllOrders);
router.post("/update", updateOrder);

export default router;
