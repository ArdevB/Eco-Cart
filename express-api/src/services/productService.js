import fs from "fs";

const getProducts = (req, res) => {
  const rawData = fs.readFileSync("./src/data/products.json");

  const products = JSON.parse(rawData);

  const filteredProducts = products.filter((product) => product.price > 500);

  res.status(200).json(filteredProducts);
};

export default { getProducts };
