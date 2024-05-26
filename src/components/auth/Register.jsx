import React from "react";

const Register = () => {
  return (
    <div className="mt-10">
      <div className="flex gap-6 flex-col">
        <input
          type="text"
          placeholder="first name"
          className="bg-[#f5f5f5] border-b-2 sm:text-[16px] text-sm border-gray-400"
        />
        <input
          type="text"
          placeholder="last name"
          className="bg-[#f5f5f5] border-b-2 sm:text-[16px] text-sm border-gray-400"
        />
        <input
          type="text"
          placeholder="Email"
          className="bg-[#f5f5f5] border-b-2 sm:text-[16px] text-sm border-gray-400"
        />
        <input
          type="text"
          placeholder="Mobile no"
          className="bg-[#f5f5f5] border-b-2 sm:text-[16px] text-sm border-gray-400"
        />
        <input
          type="text"
          placeholder="password"
          className="bg-[#f5f5f5] border-b-2 sm:text-[16px] text-sm border-gray-400"
        />
      </div>
      <div className="flex items-start justify-start !gap-2.5 mt-5 checkbox">
        <input
          type="checkbox"
          class="sm:w-7 sm:h-7 h-5 w-5 sm:-mt-[3px] checked:!bg-[#faa61a] checked:!border-transparent"
        />

        <p className="text-[10px] sm:text-xs">
          By creating an account you agree with our Terms of Service, Privacy
          and User policy.
        </p>
      </div>
      <div className="mt-4 flex flex-col items-center justify-center text-center gap-1">
        <p className="text-lg hover:bg-[#faa61a] hover:text-white rounded-md py-1 px-4 cursor-pointer">
          Register
        </p>
      </div>
    </div>
  );
};

export default Register;
