import mongoose from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },

    email: {
      type: String,
      required: true,
      unique: true,
    },

    mobile: {
      type: String,
      required: true,
      unique: true,
    },

    password: {
      type: String,
      required: true,
      select: false,
    },

    role: {
      type: String,
      enum: ["rider", "captain", "admin"],
      default: "rider",
    },

    isVerified: { type: Boolean, default: false },
  },
  { timestamps: true }
);


const User = mongoose.model("User", userSchema);
export default User;