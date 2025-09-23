import fs from "fs";

const getProducts = (req, res) => {
  const rawData = fs.readFileSync("./src/data/products.json");

  const products = JSON.parse(rawData);

  const filteredProducts = products.filter((product) => product.price > 500);

  res.status(200).json(filteredProducts);
};

const getProductById = (id) => {
  const foundProduct = product.find((product) => product.id == id);
  return foundProduct;
};

export default { getProducts, getProductById };
