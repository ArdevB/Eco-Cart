import orderService from "../services/orderService.js";

const getOrders = async (req, res) => {
  try {
    const data = await orderService.getOrders();

    res.json(data);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const createOrder = async (req, res) => {
  const input = req.body;

  if (!input.orderItems || !input.orderItems.length) {
    return res.status(400).send("Order Items are required.");
  }

  try {
    const data = await orderService.createOrder(req.body, req.user);

    res.status(201).json(data);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

export default { getOrders, createOrder };
