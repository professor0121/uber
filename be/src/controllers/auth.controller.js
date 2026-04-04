import asyncHandler from "../utils/asyncHandler.js";
import { authService } from "../services/auth.service.js";

export const authController = {
  register: asyncHandler(async (req, res) => {
    const { name, email, password, phone, role } = req.body;

    if (!name || !email || !password || !phone) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    const { user, token } = await authService.register({
      name,
      email,
      password,
      phone,
      role,
    });

    res.status(201).json({
      success: true,
      user,
      token,
    });
  }),

  login: asyncHandler(async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    const { user, token } = await authService.login({
      email,
      password,
    });

    res.status(200).json({
      success: true,
      user,
      token,
    });
  }),
};