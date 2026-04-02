import asyncHandler from "../utils/asyncHandler.js";
import { authService } from "../services/auth.service.js";

export const authController = {
  register: asyncHandler(async (req, res, next) => {
    const { name, email, password, mobile } = req.body;

    if (!name || !email || !password || !mobile) {
      return next(new Error("All fields are required"));
    }

    const response = await authService.register({
      name,
      email,
      password,
      mobile,
    });

    // handle duplicate user case
    if (response === "User already exists") {
      return res.status(400).json({
        success: false,
        message: response,
      });
    }

    return res.status(201).json({
      success: true,
      data: response.user,
    });
  }),
};