import express from "express";
import orderController from "../controllers/orderController.js";
import auth from "../middlewares/auth.js";
import roleBasedAuth from "../middlewares/roleBasedAuth.js";
import { ADMIN } from "../constants/roles.js";

const router = express.Router();

// URL: /api/orders
router.get("/", roleBasedAuth(ADMIN), orderController.getOrders);

router.get("/user", orderController.getOrdersByUser);

router.get("/:id", roleBasedAuth(ADMIN), orderController.getOrdersById);

router.post("/", orderController.createOrder);

router.put("/:id", orderController.updateOrder);

router.delete("/:id", orderController.deleteOrder);

router.post("/:id/payment/khalti", orderController.orderPaymentViaKhalti);

router.put("/:id/confirm-payment", orderController.confirmOrderPayment);

export default router;
