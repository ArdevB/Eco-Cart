import bodyParser from "body-parser";
import express from "express";

import config from "./config/config.js";
import productRoutes from "./routes/productRoute.js";
import userRoutes from "./routes/userRoute.js";
import connectDB from "./config/database.js";
import authRoutes from "./routes/authRoute.js";

const app = express();

connectDB();

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.json({
    name: config.name,
    version: config.version,
    status: "OK",
    port: config.port,
  });
});

app.use("/api/auth", authRoutes);
app.use("/api/products", productRoutes);
app.use("/api/users", userRoutes);

app.listen(config.port, () => {
  console.log(`Server is running on port ${config.port}`);
});
