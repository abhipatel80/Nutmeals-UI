import React from "react";

const BlogColumnView = ({ color, img }) => {
  return (
    <div className="flex justify-center items-start gap-5 2xl:gap-8 mb-4">
      <div className="relative">
        <img
          src={`${img ? img : "/images/img11.png"}`}
          alt="blog"
          className="!w-[200px] 2xl:!w-[370px] rounded-lg border"
        />
        <p
          className={`${
            color ? color : "bg-[#F8A531]"
          } text-white px-3 py-0.5 text-xs top-2 left-2 absolute rounded-[4px] w-fit mb-2.5`}
        >
          Active
        </p>
      </div>
      <div>
        <h2 className="font-semibold text-[13px] 2xl:text-xl">
          Food as preventive pharmacy!
        </h2>
        <div className="w-full mt-1 flex justify-start items-center text-gray-500 gap-y-0.5 lg:gap-x-3 gap-x-1.5 flex-wrap">
          <div className="flex items-center justify-center gap-1">
            <img
              src="/icons/generic_web_icons/account_profile.svg"
              alt="profile"
              className="w-2.5 2xl:w-3"
            />
            <p className="text-[10px] 2xl:text-[15px]">User</p>
          </div>
          <div className="flex items-center justify-center gap-1">
            <img
              src="/icons/generic_web_icons/pencil.svg"
              alt="pencil"
              className="w-2.5 2xl:w-3"
            />
            <p className="text-[10px] 2xl:text-[15px]">
              July 24, 2019
            </p>
          </div>
          <div className="flex items-center justify-center gap-1">
            <img
              src="/icons/generic_web_icons/watch.svg"
              alt="time"
              className="w-2.5 2xl:w-3"
            />
            <p className="text-[10px] 2xl:text-[15px]">
              2 mins read
            </p>
          </div>
          <div className="flex items-center justify-center gap-1">
            <i className="fa-regular fa-comment text-[#f6a192] text-[9px] 2xl:text-[12px] font-bold"></i>
            <p className="text-[10px] 2xl:text-[15px]">
              2 react
            </p>
          </div>
        </div>
        <p className="text-[10px] 2xl:text-[15px] tracking-wide mt-1.5">
          Mauris mattis auctor cursus. Phasellus tellus tellus, imperdiet ut
          imperdiet eu, iaculis a sem. Donec vehicula luctus...
        </p>
      </div>
    </div>
  );
};

export default BlogColumnView;
