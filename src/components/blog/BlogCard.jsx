import Link from "next/link";
import React from "react";

const BlogCard = ({ img, color, link }) => {
  return (
    <Link href={link ? link : "/blog/2"}>
      <div className="md:min-w-[200px] lg:min-w-full bg-graya-100">
        <div className="relative m-auto rounded-2xl shadow-md bg-white border border-solid p-4 mb-3">
          <p
            className={`absolute ${color} text-white px-3 py-0.5 text-xs rounded-[4px] top-2 left-2`}
          >
            Active
          </p>
          <img src={img} alt="blog" className="w-full" />
        </div>
        <div className="w-full">
          <h2 className="font-semibold lg:text-lg 2xl:text-2xl text-[12px] mb-1 text-start">
            Food as preventive pharmacy!
          </h2>
          <div className="w-full flex justify-start items-center text-gray-500 lg:gap-3 gap-1 flex-wrap">
            <div className="flex items-center justify-center gap-1">
              <img
                src="/icons/generic_web_icons/account_profile.svg"
                alt="profile"
                className="w-2.5 2xl:w-3"
              />
              <p className="lg:text-[10px] text-[9px] 2xl:text-[15px]">User</p>
            </div>
            <div className="flex items-center justify-center gap-1">
              <img
                src="/icons/generic_web_icons/pencil.svg"
                alt="pencil"
                className="w-2.5 2xl:w-3"
              />
              <p className="lg:text-[10px] text-[9px] 2xl:text-[15px]">
                July 24, 2019
              </p>
            </div>
            <div className="flex items-center justify-center gap-1">
              <img
                src="/icons/generic_web_icons/watch.svg"
                alt="time"
                className="w-2.5 2xl:w-3"
              />
              <p className="lg:text-[10px] text-[9px] 2xl:text-[15px]">
                2 mins read
              </p>
            </div>
            <div className="flex items-center justify-center gap-1">
              <i className="fa-regular fa-comment text-[#f6a192] text-[9px] 2xl:text-[12px] font-bold"></i>
              <p className="lg:text-[10px] text-[9px] 2xl:text-[15px]">
                2 react
              </p>
            </div>
          </div>
          <p className="lg:text-[12px] text-[10px] 2xl:text-[15px] tracking-wide mt-1.5">
            Mauris mattis auctor cursus. Phasellus tellus tellus, imperdiet ut
            imperdiet eu, iaculis a sem. Donec vehicula luctus nunc in
            laoreet...
          </p>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
