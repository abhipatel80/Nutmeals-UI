"use client";
import Link from "next/link";
import React, { useState } from "react";

const ProductDetails = () => {
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
    <div className="lg:w-[42vw] xl:w-[38vw] flex justify-center items-center">
      <div className="border services-section lg:h-[74vh] overflow-auto bg-[#f5f5f5] border-gray-300 rounded-lg px-4 py-2 xs:px-8 xs:py-4">
        <div className="title text-[15px] xs:text-[18px] sm:text-[24px] lg:text-[20px] 2xl:text-[32px] flex">
          peanuts - <span>&nbsp;roasted & salted</span>
          <span className="ml-auto"> 200 g</span>
        </div>

        <div className="price-set flex justify-between items-center mt-2">
          <div className="incdec flex m-2">
            <button className="text-3xl 2xl:!text-[50px]" onClick={minusCount}>
              -
            </button>
            <input
              className="w-14 border border-black text-center rounded-lg mx-3 bg-[#f5f5f5]"
              type="text"
              value={count}
              min={1}
              onChange={handleChange}
            />
            <button className="text-3xl 2xl:text-[40px]" onClick={plusCount}>
              +
            </button>
          </div>
          <div className="price text-[20px] 2xl:text-[25px]">100</div>
        </div>

        <div className="detail-1 my-2 2xl:my-10">
          <div className="text-[16px] sm:text-[19px] 2xl:text-[26px] text-green-500">
            consumption preference
          </div>
          <div className="v1-button">
            <div className="flex justify-start flex-wrap gap-x-14 gap-y-4 mt-1 2xl:mt-2 text-[15px] sm:text-[17px] 2xl:text-[24px]">
              <button className="text-[#faa61a]">raw</button>
              <button>roasted</button>
              <button>flour</button>
              <button>oil</button>
              <button>milk</button>
              <button>spread</button>
              <button>sprouted</button>
              <button>energy bar</button>
            </div>
          </div>
        </div>

        <div className="detail-2 my-3 2xl:my-8">
          <div className="text-[16px] sm:text-[19px] 2xl:text-[26px] text-green-500">
            variants
          </div>
          <div className="v1-button">
            <div className="w-full flex justify-start flex-wrap gap-x-12 gap-y-4 mt-1 2xl:mt-2 text-[15px] sm:text-[17px] 2xl:text-[24px]">
              <button className="text-[#faa61a]">plain roasted</button>
              <button>roasted & salted</button>
              <button>flour</button>
              <button>oil</button>
              <button>milk</button>
              <button>spread</button>
              <button>sprouted</button>
              <button>energy bar</button>
            </div>
          </div>
        </div>

        <div className="detail-3 my-3 2xl:my-8">
          <div className="text-[16px] sm:text-[19px] 2xl:text-[26px] text-green-500">
            package
          </div>
          <div className="flex text-[15px] sm:text-[17px] 2xl:text-[24px] justify-between flex-wrap mt-1 2xl:mt-2">
            <button>100 g</button>
            <button className="text-[#faa61a]">200 g</button>
            <button>400 g</button>
            <button>1 kg</button>
          </div>
        </div>

        <div className="flex justify-evenly gap-2 !mt-8">
          <Link
            href="/cart"
            className="w-fit h-[50px] border border-gray-400 hover:border-[#faa61a] text-lg rounded-md py-3 px-4 hover:bg-[#faa61a] duration-300"
          >
            <img
              src="/icons/generic_web_icons/add to cart.svg"
              className="w-5"
            />
          </Link>
          <Link href="/cart/address" className="btn-slide">
            <span className="circle">
              <i className="fa-solid fa-angles-right"></i>
            </span>
            <span className="title">Buy Now</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
