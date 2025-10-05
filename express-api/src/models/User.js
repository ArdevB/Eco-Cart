import mongoose from "mongoose";
import { ADMIN, MERCHANT, USER } from "../constants/roles.js";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "User name is required"],
  },
  email: {
    type: String,
    required: [true, "User email is required"],
    trim: true,
    unique: true,
    lowercase: true,
    validate: {
      validator: (value) => {
        const emailRegex = /^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/;

        return emailRegex.test(value);
      },
      message: "Please enter a valid email address",
    },
  },
  password: {
    type: String,
    required: [true, "User password is required"],
    minlength: [8, "Password must be at least 8 characters long"],
    // validate: {
    //   validator: (value) => {
    //     const passwordRegex =
    //       /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    //     return passwordRegex.test(value);
    //   },
    // },
  },
  role: {
    type: [String],
    default: [USER],
    enum: [USER, ADMIN, MERCHANT],
  },
  address: {
    street: {
      type: String,
    },
    city: {
      type: String,
      required: [true, "City is required"],
    },
    country: {
      type: String,
      default: "Nepal",
    },
    province: {
      type: String,
      required: [true, "Province is required"],
    },
  },
  phone: {
    type: String,
    required: [true, "User phone number is required"],
    unique: true,
    validate: {
      validator: (value) => {
        const phoneRegex = /^\+?[1-9]\d{1,14}$/;

        return phoneRegex.test(value);
      },
      message: "Please enter a valid phone number",
    },
  },
  profileImageUrl: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    immutable: true,
  },
});

const model = mongoose.model("User", userSchema);

export default model;
