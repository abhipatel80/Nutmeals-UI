"use client"
import Login from "@/components/auth/LoginEmail";
import Register from "@/components/auth/Register";
import React, { useState } from "react";

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [isRegister, setIsRegister] = useState(false);

  const handleLogin = () => {
    setIsLogin(true);
    setIsRegister(false);
  };
  const handleRegister = () => {
    setIsLogin(false);
    setIsRegister(true);
  };

  return (
    <div className="w-full h-[70vh] sm:h-[78vh] flex items-center justify-center text-gray-500 auth">
      <div className="sm:max-w-[450px] sm:min-w-[450px] w-full sm:min-h-[375px] bg-[#f5f5f5] sm:px-14 px-8 py-5 sm:py-8 rounded-xl shadow-xl">
        <div className="flex justify-center gap-10 sm:text-lg text-[16px] -mb-3 font-medium">
          <button className={`w-full ${isLogin && "text-[#faa61a]"}`} onClick={handleLogin}>
            Login
          </button>
          <button className={`w-full ${isRegister && "text-[#faa61a]"}`} onClick={handleRegister}>
            Register
          </button>
        </div>
        {isLogin && <Login />}
        {isRegister && <Register />}
      </div>
    </div>
  );
};

export default Auth;
