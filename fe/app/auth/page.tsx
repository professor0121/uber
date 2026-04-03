'use client';
import React, { memo, useState, useCallback } from "react";
import AuthForm from "@/components/AuthForm";
import { AuthMode } from "@/types/auth.types";

const AuthPage: React.FC = () => {
  const [mode, setMode] = useState<AuthMode>("login");

  const toggleMode = useCallback(() => {
    setMode((prev) => (prev === "login" ? "register" : "login"));
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen gap-4">
      <AuthForm mode={mode} />

      {/* Toggle Button */}
      <p className="text-sm">
        {mode === "login" ? "Don't have an account?" : "Already have an account?"}
        <button
          onClick={toggleMode}
          className="ml-2 text-blue-500 underline"
        >
          {mode === "login" ? "Register" : "Login"}
        </button>
      </p>
    </div>
  );
};

export default memo(AuthPage);