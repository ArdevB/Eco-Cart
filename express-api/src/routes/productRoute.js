import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("All Products");
});

router.get("/one", (req, res) => {
  res.send("One Product");
});

router.put("/", (req, res) => {
  res.send("Update a Product");
});

export default router;
