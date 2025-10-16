import dotenv from "dotenv";

dotenv.config();

const config = {
  appUrl: process.env.APP_URL || "",
  mongoDBUrl: process.env.MONGODB_URL || "",
  name: process.env.NAME || "",
  port: process.env.PORT || 5000,
  version: process.env.VERSION || "1.0.0",
  jwtSecret: process.env.JWT_SECRET || "",
  cloudinary: {
    cloudName: process.env.CLOUDINARY_CLOUD_NAME || "",
    apiKey: process.env.CLOUDINARY_API_KEY || "",
    apiSecret: process.env.CLOUDINARY_API_SECRET || "",
  },
  khalti: {
    apiKey: process.env.KHALTI_API_KEY || "",
    apiUrl: process.env.KHALTI_API_URL || "",
    returnUrl: process.env.KHALTI_RETURN_URL || "",
  },
  email: {
    apiKey: process.env.EMAIL_API_KEY || "",
  },
  twilio: {
    accountSid: process.env.TWILIO_ACCOUNT_SID || "",
    authToken: process.env.TWILIO_AUTH_TOKEN || "",
    phoneNumber: process.env.TWILIO_PHONE_NUMBER || "",
  },
};

export default config;
