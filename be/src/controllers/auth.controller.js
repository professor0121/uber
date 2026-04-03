import asyncHandler from "../utils/asyncHandler.js";
import { authService } from "../services/auth.service.js";

export const authController = {
  register: asyncHandler(async (req, res, next) => {
    const { name, email, password, mobile } = req.body;

    if (!name || !email || !password || !mobile) {
      return next(new Error("All fields are required"));
    }

    const {user,success} = await authService.register({
      name,
      email,
      password,
      mobile,
    });

    // handle duplicate user case
    if (!user&& !success) {
      return res.status(400).json({
        success: false,
        message: "user already exists",
      });
    }

    return res.status(201).json({
      success: true,
      data: user,
    });
  }),
  login: asyncHandler(async (req, res, next) => {
    const { email, password } = req.body;

    if (!email || !password) {
      return next(new Error("All fields are required"));
    }

    const {user,token,success} = await authService.login({
      email,
      password,
    });
    if (!user&& !success&& !token) {
      return res.status(404).json({
        success: false,
        message: "user not found",
      });
    }
    return res.status(200).json({
      success: success,
      user:user,
      token:token
    });
  }),
};