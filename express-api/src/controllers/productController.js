import productService from "../services/productService.js";
const getProducts = (req, res) => {
  const products = productService.getProducts();

  res.status(200).json(products);
};

const getProductById = (req, res) => {
  //Request Params
  const id = req.params.id;
  const product = productService.getProductById(id);

  res.json(product);
};

const createProduct = (req, res) => {
  res.send("Created a Product");
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
  getProductById,
  updateProduct,
  deleteProduct,
};
