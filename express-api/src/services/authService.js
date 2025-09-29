import User from "../models/User.js";
import bcrypt from "bcryptjs";

const login = async (data) => {
  const user = await User.findOne({ email: data.email });

  if (!user) throw { statusCode: 404, message: "User not found." };

  const isPasswordMatch = bcrypt.compareSync(data.password, user.password);

  if (!isPasswordMatch) throw { message: "Invalid credentials." };

  return {
    _id: user._id,
    name: user.name,
    email: user.email,
    address: user.address,
    phone: user.phone,
    role: user.role,
  };
};

const register = async (data) => {
  const user = await User.findOne({ email: data.email });

  if (user) throw { statusCode: 400, message: "User already exist." };

  const hashedPassword = bcrypt.hashSync(data.password);

  const registeredUser = await User.create({
    name: data.name,
    email: data.email,
    password: hashedPassword,
    address: data.address,
    phone: data.phone,
  });

  return {
    _id: registeredUser._id,
    name: registeredUser.name,
    email: registeredUser.email,
    address: registeredUser.address,
    phone: registeredUser.phone,
    role: registeredUser.role,
  };
};

export default { register, login };
