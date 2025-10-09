import mongoose from "mongoose";
import {
  ORDER_STATUS_PENDING,
  ORDER_STATUS_PROCESSING,
  ORDER_STATUS_COMPLETED,
  ORDER_STATUS_SHIPPED,
  ORDER_STATUS_CANCELLED,
  ORDER_STATUS_DELIVERED,
  ORDER_STATUS_RETURNED,
  ORDER_STATUS_CONFIRMED,
} from "../constants/orderStatuses.js";

const orderSchema = new mongoose.Schema({
  orderNumber: {
    type: String,
    required: [true, "Order tracking number is required"],
    unique: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: [true, "User is required"],
  },
  orderItems: [
    {
      product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
        required: [true, "Product id is required"],
      },
      quantity: {
        type: Number,
        default: 1,
      },
    },
  ],
  status: {
    type: String,
    default: ORDER_STATUS_PENDING,
    enum: [
      ORDER_STATUS_PENDING,
      ORDER_STATUS_PROCESSING,
      ORDER_STATUS_CONFIRMED,
      ORDER_STATUS_COMPLETED,
      ORDER_STATUS_SHIPPED,
      ORDER_STATUS_CANCELLED,
      ORDER_STATUS_DELIVERED,
      ORDER_STATUS_RETURNED,
    ],
  },
  totalPrice: {
    type: Number,
    required: [true, "Total price is required"],
  },
  shippingAddress: {
    street: {
      type: String,
    },
    city: {
      type: String,
      required: [true, "Shipping address city is required"],
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
    default: Date.now(),
    immutable: true,
  },
});

const model = mongoose.model("Order", orderSchema);

export default model;
