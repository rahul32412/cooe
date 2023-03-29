import mongoose from "mongoose";

const OrderSchema = mongoose.Schema({
  period_id: { type: Number, required: true },
  userId: { type: String, required: true },
  createdOn: { type: Date, default: Date.now },
  colorSelected: { type: String },
  contractMoney: { type: Number, required: true },
  status: { type: String, default: "undeliver", required: true },
});

export default mongoose.model("order", OrderSchema);
