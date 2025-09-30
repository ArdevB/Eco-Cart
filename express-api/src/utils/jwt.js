import jwt from "jsonwebtoken";
import config from "../config/config.js";

function generateJWT(data) {
  const token = jwt.sign(data, config.jwtSecret, {
    expiresIn: "365d",
  });

  return token;
}

async function verifyJWT(authToken) {
  return await new Promise((resolve, reject) => {
    jwt.verify(authToken, config.jwtSecret, (err, data) => {
      if (err) return reject(err);

      return resolve(data);
    });
  });
}

export { generateJWT, verifyJWT };
