import {userDao} from "../dao/user.dao.js";
import { hashPassword } from "../utils/bcryptHass.js";

export const authService = {
    register: async function (paylod) {
        const existingUser = await userDao.getUserByEmail(paylod.email);
        if (existingUser) {
            return "User already exists";
        }
        paylod.password = await hashPassword(paylod.password);
        const user = await userDao.createUser(paylod);
        return { user, success: true };
    }
}
