import React from "react";

const LoginPassword = ({ setFirstStepLogin }) => {
  return (
    <div className="mt-10">
      <div className="flex gap-x-7 gap-y-4 flex-col">
        <input
          type="text"
          placeholder="password"
          className="bg-[#f5f5f5] border-b-2 sm:text-[16px] text-sm border-gray-400"
        />
        <div className="w-full flex justify-between items-center">
          <p
            className="-ml-4 -mt-1.5 text-[13px] hover:bg-[#faa61a] hover:text-white rounded-md py-1 px-4 cursor-pointer"
            onClick={() => setFirstStepLogin(true)}
          >
            Back
          </p>
          <p className="text-[13px] cursor-pointer">forget password</p>
        </div>
      </div>
      <div className="mt-4 flex flex-col items-center justify-center text-center gap-1">
        <p className="text-[16px] hover:bg-[#faa61a] hover:text-white rounded-md py-1 px-4 cursor-pointer">
          Sign in
        </p>
        <p className="text-gray-400 mt-5 -mb-2 text-xs">OR</p>
        <p className="text-xs text-gray-400">continue with</p>
        <div className="flex items-center justify-center gap-9 mt-4">
          <i className="fa-brands fa-apple text-4xl text-black hover:bg-[#faa61a] duration-300 hover:text-white rounded-full px-2.5 py-1 pb-1.5"></i>
          <i className="fa-brands fa-google text-3xl mt-1 text-black hover:bg-[#faa61a] duration-300 hover:text-white rounded-full p-2"></i>
          <i className="fa-solid fa-fingerprint text-3xl mt-1.5 text-black hover:bg-[#faa61a] duration-300 hover:text-white rounded-full p-2"></i>
        </div>
      </div>
    </div>
  );
};

export default LoginPassword;
