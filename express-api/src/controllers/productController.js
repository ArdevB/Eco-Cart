import fs from "fs";
import productService from "../services/productService.js";
const getProducts = (req, res) => {
  const products = productService.getProducts();

  res.status(200).json(products);
};

const createProduct = (req, res) => {
  res.send("Created a Product");
};

const createProductById = (req, res) => {
  res.send("One Product");
};

const updateProduct = (req, res) => {
  res.send("Update a Product");
};

const deleteProduct = (req, res) => {
  res.send("Delete a Product");
};

export default {
  getProducts,
  createProduct,
  createProductById,
  updateProduct,
  deleteProduct,
};
