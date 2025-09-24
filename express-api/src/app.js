import bodyParser from "body-parser";
import express from "express";

import config from "./config/config.js";
import productRoutes from "./routes/productRoute.js";

const app = express();
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.json({
    name: config.name,
    version: config.version,
    status: "OK",
    port: config.port,
  });
});

app.use("/products", productRoutes);

app.listen(config.port, () => {
  console.log(`Server is running on port ${config.port}`);
});
