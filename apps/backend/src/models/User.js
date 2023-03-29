import mongoose from "mongoose";

const UserSchema = mongoose.Schema({
  userId: { type: String, required: true },
  nickName: { type: String },
  mobile: { type: Number },
  availableBalance: { type: Number, default: 0.0 },
  address: [
    {
      fullName: { type: String },
      mobileNumber: { type: Number },
      pinCode: { type: Number },
      state: { type: String },
      city: { type: String },
      detailAddress: { type: String },
    },
  ],
});

export default mongoose.model("user", UserSchema);
