"use client";
import React, { memo } from "react";
import { useAuth } from "../hooks/useAuth";
import { AuthMode, Role } from "../types/auth.types";

type Props = {
  mode: AuthMode;
};

const roles: Role[] = ["raider", "captain"];
const AuthForm: React.FC<Props> = ({ mode }) => {
  const { form, loading, handleChange, handleSubmit } = useAuth(mode);

  const isLogin = mode === "login";

  return (
    <div className="flex items-center justify-center ">
      <form
        onSubmit={handleSubmit}
        className="w-96 p-8 rounded-2xl shadow-lg"
      >
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
          {isLogin ? "Welcome Back 👋" : "Create Account 🚀"}
        </h2>

        {/* Name */}
        {!isLogin && (
          <input
            type="text"
            name="name"
            value={form.name || ""}
            onChange={handleChange}
            placeholder="Full Name"
            className="w-full mb-3 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        )}

        {/* Phone */}
        {!isLogin && (
          <input
            type="tel"
            name="phone"
            value={form.phone || ""}
            onChange={handleChange}
            placeholder="Phone Number"
            className="w-full mb-3 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        )}

        {/* Role Dropdown */}
        {!isLogin && (
          <select
            name="role"
            value={form.role || ""}
            onChange={handleChange}
            className="w-full mb-3 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            <option value="">Select Role</option>
            {roles.map((role) => (
              <option key={role} value={role}>
                {role}
              </option>
            ))}
          </select>
        )}

        {/* Email */}
        <input
          type="email"
          name="email"
          value={form.email || ""}
          onChange={handleChange}
          placeholder="Email Address"
          className="w-full mb-3 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        {/* Password */}
        <input
          type="password"
          name="password"
          value={form.password || ""}
          onChange={handleChange}
          placeholder="Password"
          className="w-full mb-5 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        {/* Button */}
        <button
          disabled={loading}
          className={`w-full p-3 text-white font-semibold rounded-lg transition ${
            isLogin
              ? "bg-blue-500 hover:bg-blue-600"
              : "bg-green-500 hover:bg-green-600"
          }`}
        >
          {loading
            ? "Please wait..."
            : isLogin
            ? "Login"
            : "Register"}
        </button>
      </form>
    </div>
  );
};

export default memo(AuthForm);