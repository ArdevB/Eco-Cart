import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Product name is required"],
  },
  price: {
    type: Number,
    required: [true, "Product price is required"],
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
  },
  stock: {
    type: Number,
    default: 1,
  }
});

const model = mongoose.model("Product", productSchema);

export default model;
