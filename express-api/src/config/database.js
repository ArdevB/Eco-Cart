import mongoose from "mongoose";
import config from "./config.js";
async function connectDB() {
  try {
    const status = await mongoose.connect(config.atlas_url);

    console.log(`MongoDB connected: ${status.connection.host}`);
  } catch (error) {
    console.log(error);
  }
}

export default connectDB;
