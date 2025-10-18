import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Product name is required"],
  },
  price: {
    type: Number,
    required: [true, "Product price is required"],
    min: [0, "Price must be positive number"],
  },
  brand: {
    type: String,
    required: [true, "Product brand is required"],
  },
  category: {
    type: String,
    required: [true, "Product category is required"],
  },
  createdAt: {
    type: Date,
    default: Date.now,
    immutable: true,
  },
  stock: {
    type: Number,
    default: 1,
    select: false,
    max: [10000, "Stock can't be more than 10000"],
  },
  description: {
    type: String,
  },
  size: {
    type: String,
    enum: ["S", "M", "L", "XL", "XXL"],
  },
  imageUrls: {
    type: [String],
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: [true, "Product creator is required"],
  },
  description: String,
});

const model = mongoose.model("Product", productSchema);

export default model;
