import e from "express";
import userService from "../services/userService.js";

const createUser = async (req, res) => {
  try {
    const data = await userService.createUser(req.body);

    res.status(201).json(data);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const getUsers = async (req, res) => {
  const data = await userService.getUsers();

  res.status(200).json(data);
};

export default { createUser, getUsers };
