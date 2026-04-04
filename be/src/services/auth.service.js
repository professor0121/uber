import { userDao } from "../dao/user.dao.js";
import { hashPassword, comparePassword } from "../utils/bcryptHass.js";
import { signToken } from "../utils/jwtToken.js";
import { ApiError } from "../utils/apiError.js";

export const authService = {
  register: async ({ name, email, password, phone, role }) => {
    const existingUser = await userDao.getUserByEmail(email);

    if (existingUser) {
      throw new ApiError(400, "User already exists");
    }

    const hashedPassword = await hashPassword(password);

    const user = await userDao.createUser({
      name,
      email,
      password: hashedPassword,
      phone,
      role,
    });

    const token = await signToken({
      id: user._id,
      email: user.email,
    });

    return { user, token };
  },

  login: async ({ email, password }) => {
    const user = await userDao.getUserByEmail(email);

    if (!user) {
      return  new ApiError(404, "Invalid user name or password");
    }

    const isPasswordValid = await comparePassword(
      password,
      user.password
    );

    if (!isPasswordValid) {
      return new ApiError(401, "Invlid username of password");
    }

    const token = await signToken({
      id: user._id,
      email: user.email,
    });

    // remove password before sending
    user.password = undefined;

    return { user, token };
  },
};