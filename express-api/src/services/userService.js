import { MERCHANT, USER } from "../constants/roles.js";
import User from "../models/User.js";
import uploadFile from "../utils/file.js";

const createUser = async (data) => await User.create(data);

const getUsers = async () => {
  const users = await User.find();

  return users;
};

const getUserById = async (id) => {
  const user = await User.findById(id);

  if (!user) {
    throw {
      statusCode: 404,
      message: "User not found.",
    };
  }
};

const updateUser = async (id, data, authUser) => {
  const user = await getUserById(id);

  if (user._id != user._id && !authUser.roles.includes(ADMIN)) {
    throw {
      statusCode: 403,
      message: "Access denied.",
    };
  }
  const updatedUser = await User.findByIdAndUpdate(
    id,
    {
      name: data.name,
      phone: data.phone,
      address: data.address,
    },
    { new: true }
  );

  return updatedUser;
};

const deleteUser = async (id) => {
  const updatedUser = await User.findByIdAndDelete(id);
};

const updateProfileImage = async (id, file, authUser) => {
  const user = await getUserById(id);

  if (user._id != user._id && !authUser.roles.includes(ADMIN)) {
    throw {
      statusCode: 403,
      message: "Access denied.",
    };
  }

  const uploadedFile = await uploadFile([file]);

  const updatedUser = await User.findByIdAndUpdate(
    id,
    { profileImageUrl: uploadedFile[0]?.url },
    { new: true }
  );

  return updatedUser;
};

const createMerchant = async (userId) => {
  const updatedUser = await User.findByIdAndUpdate(
    userId,
    {
      role: [USER, MERCHANT],
    },
    { new: true }
  );

  return updatedUser;
};

export default {
  createUser,
  getUsers,
  getUserById,
  updateUser,
  deleteUser,
  updateProfileImage,
  createMerchant,
};
