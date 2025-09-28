import mongoose from "mongoose";
import { type } from "os";

const productSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  price: Number,
  brand: String,
  category: String,
  createdAt: {
    type: Date,
  },
});

const model = mongoose.model("Product", productSchema);

export default model;
