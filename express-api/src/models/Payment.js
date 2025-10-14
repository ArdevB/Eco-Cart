import mongoose from "mongoose";

new mongoose.Schema({
  amount: {
    type: Number,
    required: [true, "Amount is required"],
  },
  paymentMethod: {
    type: String,
    required: [true, "Payment method is required"],
    enum: ["cash", "card", "bank transfer", "online payment"],
  },
  status: {
    type: String,
    default: "pending",
    enum: ["pending", "completed", "failed"],
  },
  createdAt: {
    type: Date,
    default: Date.now,
    immutable: true,
  },
  transactionId: String,
});

const model = mongoose.model("Payment", paymentSchema);

export default model;
