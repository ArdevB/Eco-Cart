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

    const authToken = generateJWT(data);

    res.cookie("authToken", authToken, { maxAge: 864000 * 1000 });

    res.status(200).json(data);
  } catch (error) {
    res.status(error.statusCode || 500).send(error.message);
  }
};

const register = async (req, res) => {
  const input = req.body;
  try {
    if (!input.password) {
      return res.status(400).send("Password is required.");
    }

    if (!input.confirmPassword) {
      return res.status(400).send("Confirm Password is required.");
    }

    if (input.password !== input.confirmPassword) {
      return res.status(400).send("Passwords do not match.");
    }

    const data = await authService.register(input);

    const authToken = generateJWT(data);

    res.cookie("authToken", authToken, { maxAge: 864000 * 1000 });

    res.status(201).json(data);
  } catch (error) {
    res.status(error.statusCode || 500).send(error.message);
  }
};

const forgotPassword = async (req, res) => {
  const input = req.body;
  try {
    if (!input.email) {
      return res.status(400).send("Email address is required.");
    }

    const data = await authService.forgotPassword(input.email);
    res.json(data);
  } catch (error) {
    res.status(error.statusCode || 500).send(error.message);
  }
};

const resetPassword = async (req, res) => {
  const input = req.body;
  const query = req.query;
  try {
    if (!query.token || !query.userId) {
      return res.status(400).send("Token and userId are required.");
    }

    if (!input.password) {
      return res.status(400).send("Password is required.");
    }

    if (!input.confirmPassword) {
      return res.status(400).send("Confirm Password is required.");
    }

    if (input.password !== input.confirmPassword) {
      return res.status(400).send("Passwords do not match.");
    }

    const data = await authService.resetPassword(
      query.userId,
      query.token,
      input.password
    );

    res.status(201).json(data);
  } catch (error) {
    res.status(error.statusCode || 500).send(error.message);
  }
};

const logout = async (req, res) => {
  res.clearCookie("authToken");

  res.json({ message: "Logged out successfully" });
};

export default { register, login, forgotPassword, resetPassword, logout };
