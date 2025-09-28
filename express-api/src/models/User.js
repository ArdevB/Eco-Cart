import mongoose from "mongoose";

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
    validate: {
      validator: (value) => {
        const passwordRegex =
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

        return passwordRegex.test(value);
      },
    },
  },
  role: {
    type: String,
    enum: ["USER", "ADMIN", "MERCHANT"],
    default: "USER",
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
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const model = mongoose.model("User", userSchema);

export default model;
