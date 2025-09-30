import authService from "../services/authService.js";
import jwt from "jsonwebtoken";
import { generateJWT, verifyJWT } from "../utils/jwt.js";

const login = async (req, res) => {
  const input = req.body;
  try {
    if (!input) {
      return res.status(400).send("Input data is required.");
    }

    if (!input.email) {
      return res.status(400).send("Email is required.");
    }

    if (!input.password) {
      return res.status(400).send("Password is required.");
    }

    const data = await authService.login(input);

    const token = generateJWT(data);

    const result = await verifyJWT(token);

    res.status(200).json(data);
  } catch (error) {
    res.status(error.statusCode || 500).send(error.message);
  }
};

const register = async (req, res) => {
  const input = req.body;

  if (!input.password) {
    return res.status(400).send("Password is required.");
  }

  if (!input.confirmPassword) {
    return res.status(400).send("Confirm Password is required.");
  }

  if (input.password !== input.confirmPassword) {
    return res.status(400).send("Passwords do not match.");
  }

  try {
    const data = await authService.register(req.body);

    res.status(201).json(data);
  } catch (error) {
    res.status(error.statusCode || 500).send(error.message);
  }
};

export default { register, login };
