import fs from "fs";

const rawData = fs.readFileSync("./src/data/products.json", "utf-8");

const products = JSON.parse(rawData);
const getProducts = (query) => {
  const filteredProducts = products.filter(
    (product) => product.brand == query.brand
  );
  return filteredProducts;
};

const getProductById = (id) => {
  const productFound = products.find((product) => product.id == id);
  return productFound;
};

const createProduct = (data) => {
  products.push(data);

  fs.writeFileSync("./src/data/products.json", JSON.stringify(products));
};

export default { getProducts, getProductById, createProduct };
