import User from "../models/User.js";
import { catchAsyncError } from "../middlewares/catchAsyncError.js";
import mongoose from "mongoose";

export const getAllUsers = catchAsyncError(async (req, res, next) => {
  const usersList = await User.find();
  res.status(200).json(usersList);
});

export const createUser = catchAsyncError(async (req, res, next) => {
  const userData = req.body;

  const existinguser = await User.findOne({ userId: userData.userId });
  if (existinguser) {
    return res.status(200).json({ user: existinguser });
  }

  const addedUser = new User(userData);
  await addedUser.save();
  res.status(200).json({ user: addedUser });
});

export const updateUser = catchAsyncError(async (req, res, next) => {
  const {id: userId} = req.params;
  const {nickName, mobile, availableBalance, address} = req.body;

  const user = await User.findOne({userId})

  if (!mongoose.Types.ObjectId.isValid(user._id)) {
    return next(new ErrorHandler("User does not exist", 404));
  }

  const updatedUser = await User.findByIdAndUpdate(
    user._id,
    { $set: { nickName, mobile,availableBalance: availableBalance, address } },
    { new: true }
  );
  res.status(200).json(updatedUser);
})
