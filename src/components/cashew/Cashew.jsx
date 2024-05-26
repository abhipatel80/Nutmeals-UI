import Link from "next/link";
import React from "react";

const Cashew = ({ title, image, width, className, description }) => {
  return (
    <div className="flex flex-wrap lg:justify-between justify-center items-center gap-10 left-div right-div">
      <img
        src={image}
        alt="profile"
        className={`${width ? width : "w-[550px]"} ${className}`}
      />
      <div className="text-[#707070] lg:max-w-[320px] lg:text-end">
        <h2 className="text-4xl mb-5">{title}</h2>
        <p className="text-sm mb-2">{description}</p>
        <Link href="/shop/category/2" className="font-semibold text-lg">View More</Link>
        <Link className="block mt-2.5 bg-[#F8A531] w-fit lg:ml-auto text-white py-1.5 px-14 rounded-[4px]" href='/product?q=buy'>Buy</Link>
      </div>
    </div>
  );
};

export default Cashew;
