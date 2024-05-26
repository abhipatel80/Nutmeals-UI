"use client";
import React, { useState } from "react";

const ComboSelectedProduct = ({ mainClassName }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [count, setCount] = useState(1);

  const handleChange = (e) => {
    const value = parseInt(e.target.value, 10);
    if (!isNaN(value) && value >= 1) {
      setCount(value);
    } else {
      setCount(1);
    }
  };

  const minusCount = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const plusCount = () => {
    setCount(count + 1);
  };

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`${
        mainClassName
          ? mainClassName
          : "large:!w-[35vw] 4xl-md:h-[8vh] xl:!w-[32vw] lg:!w-[40vw] sm:!w-[80vw] text-sm"
      } flex items-center justify-between rounded-full bg-white border border-solid border-gray-400 my-5 gap-x-6 p-1 text-[#707070]`}
    >
      <div>
        <img
          src="/icons/product_category_icons/1 nuts.svg"
          alt="nutmeals"
          className={`xs:w-10 w-9 border rounded-full border-gray-400 4xl-md:w-16 ${
            isHovered ? "hidden" : "block"
          }`}
        />
        <button className={`m-auto ${isHovered ? "block" : "hidden"}`}>
          <i className="fa-solid fa-trash xs:py-[11px] py-[9px] text-red-500 xs:px-3 px-[10.5px] 4xl-md:py-[15px] 4xl-md:px-[20px] 4xl-md:!text-2xl border rounded-full border-red-500"></i>
        </button>
      </div>
      <div>
        <p className="xs:text-sm text-xs 4xl-md:!text-xl">Peanuts</p>
        <p className="xs:text-[10px] text-[8px] 4xl-md:!text-[14px]">
          roasted - solted
        </p>
      </div>
      <p className="xs:text-sm text-xs min-w-10 4xl-md:!text-xl">200 g</p>
      <div className="flex gap-1 items-center justify-center">
        <button
          onClick={minusCount}
          className="text-2xl 4xl-md:!text-5xl pb-0.5"
        >
          -
        </button>
        <input
          type="text"
          value={count}
          min={1}
          onChange={handleChange}
          className="xs:w-10 w-8 border border-solid rounded-full text-center 4xl-md:!text-xl 4xl-md:!w-14"
        />
        <button onClick={plusCount} className="text-2xl 4xl-md:!text-4xl">
          +
        </button>
      </div>
      <p className="xs:text-sm text-xs 4xl-md:!text-xl mr-2">400</p>
    </div>
  );
};

export default ComboSelectedProduct;
