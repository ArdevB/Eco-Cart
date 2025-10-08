import express from "express";
import orderController from "../controllers/orderController.js";
import auth from "../middlewares/auth.js";

const router = express.Router();

router.get("/", orderController.getOrders);
router.post("/", auth, orderController.createOrder);

export default router;
