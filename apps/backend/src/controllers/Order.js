import Order from "../models/Order.js";
import mongoose from "mongoose";
import ErrorHandler from "../utils/ErrorHandler.js";
import { catchAsyncError } from "../middlewares/catchAsyncError.js";

export const getAllOrders = catchAsyncError(async (req, res, next) => {
  const ordersList = await Order.find();
  res.status(200).json(ordersList);
});

export const updateOrder = catchAsyncError(async (req, res, next) => {
  const { orderId, status } = req.body;

  if (!mongoose.Types.ObjectId.isValid(orderId)) {
    return next(new ErrorHandler("Order does not exist", 404));
  }

  const updatedOrder = await Order.findByIdAndUpdate(
    orderId,
    { $set: { status: status } },
    { new: true }
  );
  res.status(200).json(updatedOrder);
});
