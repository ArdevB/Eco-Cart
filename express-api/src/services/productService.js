import fs from "fs";

const rawData = fs.readFileSync("./src/data/products.json", "utf-8");

const products = JSON.parse(rawData);
const getProducts = () => {
  const filteredProducts = products.filter((product) => product.price > 500);
  return filteredProducts;
};

const getProductById = (id) => {
  const productFound = products.find((products) => products.id === id);
  return productFound;
};

export default { getProducts, getProductById };
