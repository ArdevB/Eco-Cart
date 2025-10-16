import User from "../models/User.js";
import ResetPassword from "../models/ResetPassword.js";
import bcrypt from "bcryptjs";
import sentEmail from "../utils/email.js";
import config from "../config/config.js";

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

const forgotPassword = async (email) => {
  const user = await User.findOne({ email });

  if (!user) throw { statusCode: 404, message: "User not found." };

  const token = crypto.randomUUID();

  await ResetPassword.create({
    userId: user._id,
    token,
  });

  await sentEmail(email, {
    subject: "Reset Password",
    body: `<div>
      <h1>Please click the link below to reset your password</h1>
      <a
        href="${config.appUrl}/reset-password?token=${token}&userId=${user._id}"
        style="
          padding: 5px 15px;
          background-color: lightblue;
          color: black;
          text-decoration: none;
        "
        >Reset Password
      </a>
    </div>
`,
  });
  //Send email
  // /reset-password?token=<token>&userId=<userId>

  return { message: "Reset password link sent successfully" };
};

const resetPassword = async (userId, token, newPassword) => {
  const data = await ResetPassword.findOne({
    expiresAt: { $gt: Date.now() },
    isUsed: false,
    userId,
  }).sort({ expiresAt: -1 });

  if (!data || data.token !== token) {
    throw { statusCode: 400, message: "Invalid or expired token." };
  }

  if (data.isUsed) {
    throw { statusCode: 400, message: "Token already used." };
  }

  const hashedPassword = bcrypt.hashSync(newPassword);

  await User.findByIdAndUpdate(userId, { password: hashedPassword });

  await ResetPassword.findByIdAndUpdate(data._id, { isUsed: true });

  return { message: "Password reset successfully" };
};

export default { register, login, forgotPassword, resetPassword };
