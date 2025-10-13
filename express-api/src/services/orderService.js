import { get } from "mongoose";
import Order from "../models/Order.js";

const getOrders = async () => {
  const orders = await Order.find()
    .populate("orderItems.product")
    .populate("user", ["name", "email", "phone", "address"]);

  return orders;
};

const getOrdersByUser = async (userId) => {
  const orders = await Order.find({ user: userId })
    .populate("orderItems.product")
    .populate("user", ["name", "email", "phone", "address"]);

  return orders;
};

const getOrdersById = async (id) => {
  const orders = await Order.findById(id)
    .populate("orderItems.product")
    .populate("user", ["name", "email", "phone", "address"]);

  if (!orders) throw { statusCode: 404, message: "Order not found." };

  return orders;
};

const createOrder = async (data, userId) => {
  const orderNumber = crypto.randomUUID();

  return await Order.create({ ...data, user: userId, orderNumber });
};

const updateOrder = async (id, data) => {
  return await Order.findByIdAndUpdate(
    id,
    {
      status: data.status,
    },
    { new: true }
  );
};

const deleteOrder = async (id) => await Order.findByIdAndDelete(id);

export default {
  getOrders,
  createOrder,
  deleteOrder,
  getOrdersByUser,
  getOrdersById,
  updateOrder,
};
