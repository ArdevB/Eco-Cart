import User from "../models/User.js";

const createUser = async (data) => await User.create(data);

const getUsers = async () => {
  const users = await User.find();

  return users;
};

export default { createUser, getUsers };
