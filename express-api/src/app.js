import bodyParser from "body-parser";
import express from "express";
import multer from "multer";

import config from "./config/config.js";
import productRoutes from "./routes/productRoute.js";
import userRoutes from "./routes/userRoute.js";
import connectDB from "./config/database.js";
import authRoutes from "./routes/authRoute.js";
import logger from "./middlewares/logger.js";
import auth from "./middlewares/auth.js";
import roleBasedAuth from "./middlewares/roleBasedAuth.js";
import { ADMIN } from "./constants/roles.js";
import orderRoutes from "./routes/orderRoute.js";
import connectCloudinary from "./config/cloudinary.js";

const app = express();

const upload = multer({ storage: multer.memoryStorage() });

connectDB();
connectCloudinary();

app.use(bodyParser.json());
app.use(logger);

app.get("/", (req, res) => {
  res.json({
    name: config.name,
    version: config.version,
    status: "OK",
    port: config.port,
  });
});

app.use("/api/auth", authRoutes);
app.use("/api/products", upload.array("images", 5), productRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/users", auth, roleBasedAuth(ADMIN), userRoutes);

app.listen(config.port, () => {
  console.log(`Server is running on port ${config.port}`);
});
