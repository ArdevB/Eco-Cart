import dotenv from "dotenv";

dotenv.config();

const config = {
  name: process.env.NAME,
  port: process.env.PORT,
  version: process.env.VERSION,
};

export default config;
