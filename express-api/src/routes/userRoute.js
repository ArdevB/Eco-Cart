import express from "express";
import userController from "../controllers/userController.js";
import roleBasedAuth from "../middlewares/roleBasedAuth.js";
import { ADMIN } from "../constants/roles.js";

const router = express.Router();

router.get("/", roleBasedAuth(ADMIN), userController.getUsers);
router.get("/:id", roleBasedAuth(ADMIN), userController.getUserById);
router.post("/", roleBasedAuth(ADMIN), userController.createUser);
router.put("/:id", roleBasedAuth(ADMIN), userController.updateUser);
router.delete("/:id", roleBasedAuth(ADMIN), userController.deleteUser);
router.patch("/:id/profile-image", userController.updateProfileImage);

export default router;
