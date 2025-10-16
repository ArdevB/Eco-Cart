import mongoose, { mongo } from "mongoose";

const resetPasswordSchema = new mongoose.Schema({
  token: {
    type: String,
    required: [true, "Reset password token is required"],
  },
  expiresAt: {
    type: Date,
    default: () => Date.now() + 900000,
  },
  isUsed: {
    type: Boolean,
    default: false,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: [true, "User id is required"],
  },
});

const model = mongoose.model("ResetPassword", resetPasswordSchema);

export default model;
