import express from "express";
import fs from "fs";
import config from "./config/config.js";

const app = express();

app.get("/", (req, res) => {
  res.json({
    name: config.name,
    version: config.version,
    port: config.port,
  });
});

app.get("/products", (req, res) => {
  const products = fs.readFileSync("./src/data/products.json", "utf-8");
  const productObj = JSON.parse(products);
  res.json(productObj);
});

app.listen(config.port, () => {
  console.log(`Server is running on port ${config.port}`);
});
