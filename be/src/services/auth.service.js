import {userDao} from "../dao/user.dao.js";
import { compairePassword, hashPassword } from "../utils/bcryptHass.js";
import { signToken } from "../utils/jwtToken.js";

export const authService = {
    register: async function (paylod) {
        const existingUser = await userDao.getUserByEmail(paylod.email);
        if (existingUser) {
            return "User already exists";
        }
        paylod.password = await hashPassword(paylod.password);
        const user = await userDao.createUser(paylod);
        return { user, success: true };
    },
    login: async function (paylod) {
        const user = await userDao.getUserByEmail(paylod.email);
        if (!user) {
            return "User not found";
        }
        const isPasswordValid = await compairePassword(paylod.password, user.password);
        if (!isPasswordValid){
            return "invalid username or password"
        }
        const token= await signToken({id:user._id,email:user.email})
        const userObj=user.toObject();
        delete userObj.password;
        return {user:userObj,token,success:true};
    }
}
