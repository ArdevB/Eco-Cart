import express from "express";
import orderController from "../controllers/orderController.js";
import auth from "../middlewares/auth.js";
import roleBasedAuth from "../middlewares/roleBasedAuth.js";
import { ADMIN } from "../constants/roles.js";

const router = express.Router();

// URL: /api/orders
router.get("/", auth, roleBasedAuth(ADMIN), orderController.getOrders);
router.get("/user", auth, orderController.getOrdersByUser);
router.put("/:id", auth, roleBasedAuth(ADMIN), orderController.updateOrder);
router.get("/:id", auth, roleBasedAuth(ADMIN), orderController.getOrdersById);
router.post("/", auth, orderController.createOrder);
router.delete("/:id", auth, roleBasedAuth(ADMIN), orderController.deleteOrder);
router.post("/:id/payment", auth, orderController.orderPayment);
router.put("/:id/payment/confirm", auth, orderController.confirmOrderPayment);

export default router;
