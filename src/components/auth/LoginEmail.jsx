"use client";
import React, { useState } from "react";
import LoginPassword from "./LoginPassword";

const Login = () => {
  const [firstStepLogin, setFirstStepLogin] = useState(true);

  return (
    <>
      {firstStepLogin ? (
        <div className="mt-10">
          <div className="flex gap-6 flex-col">
            <input
              type="text"
              placeholder="username"
              className="bg-[#f5f5f5] border-b-2 sm:text-[16px] text-sm border-gray-400"
            />
          </div>
          <div className="mt-7 flex flex-col items-center justify-center text-center gap-1">
            <p className="text-sm sm:text-lg hover:bg-[#faa61a] hover:text-white rounded-md py-1 px-4 cursor-pointer" onClick={() => setFirstStepLogin(false)}>
              Next
            </p>
            <p className="text-gray-400 mt-5 -mb-2 text-xs">OR</p>
            <p className="text-xs text-gray-400">continue with</p>
            <div className="flex items-center justify-center gap-9 mt-4">
              <i className="fa-brands fa-apple text-3xl sm:text-4xl text-black hover:bg-[#faa61a] duration-300 hover:text-white rounded-full px-2.5 py-1 pb-1.5"></i>
              <i className="fa-brands fa-google text-2xl sm:text-3xl mt-1 text-black hover:bg-[#faa61a] duration-300 hover:text-white rounded-full p-2"></i>
              <i className="fa-solid fa-fingerprint text-2xl sm:text-3xl mt-1.5 text-black hover:bg-[#faa61a] duration-300 hover:text-white rounded-full p-2"></i>
            </div>
          </div>
        </div>
      ) : (
        <LoginPassword setFirstStepLogin={setFirstStepLogin} />
      )}
    </>
  );
};

export default Login;
