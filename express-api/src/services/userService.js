import User from "../models/User.js";

const createUser = async (data) => await User.create(data);

const getUsers = async () => {
  const users = await User.find();

  return users;
};

const getUserById = async (id) => await User.findById(id);

const updateUser = async (id, data) => {
  const updatedUser = await User.findByIdAndUpdate(id, data, { new: true });

  return updatedUser;
};

const deleteUser = async (id) => {
  const updatedUser = await User.findByIdAndDelete(id);
};

export default { createUser, getUsers, getUserById, updateUser, deleteUser };
