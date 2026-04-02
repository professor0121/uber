import User from "../models/user.model.js";

export const userDao={
    getUserByEmail: (email)=>User.findOne({email}).select("+password"),
    getUserById: (id)=>User.findById(id),
    createUser: (paylod)=>User.create(paylod),
}
