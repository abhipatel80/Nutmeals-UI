"use client";
import Link from "next/link";
import React, { useState } from "react";

const ProductCard = ({
  className,
  showCheckbox,
  titleClass,
  reviewClass,
  image,
  isPlusicon,
}) => {
  const [checked, setchecked] = useState(false);

  const handleCheckboxChange = (event) => {
    event.stopPropagation();
    setchecked(!checked);
  };

  return (
    <>
      <Link
        href={`${
          isPlusicon
            ? "/shop/combodeals/2"
            : showCheckbox
            ? "#"
            : "/product?q=buy"
        }`}
      >
        <div
          className={`${
            !showCheckbox &&
            "hover:bg-[#f5f5f5] duration-200 hover:shadow-md hover:border hover:border-solid hover:rounded-2xl"
          } p-3 relative group`}
        >
          {showCheckbox && (
            <div className="absolute right-4 p-2.5">
              <input
                type="checkbox"
                checked={checked}
                onChange={handleCheckboxChange}
                value={checked}
                onClick={(e) => e.stopPropagation()}
                className="w-[18px] h-[18px] checked:bg-blue-500 checked:border-transparent"
              />
            </div>
          )}
          <div className="border p-2 rounded-2xl bg-white">
            <div
              className={`absolute w-fit mb-2 bg-gray-200 rounded-full py-1 px-3 text-[12px] ${
                isPlusicon ? "invisible" : ""
              }`}
            >
              <p>Save $160</p>
            </div>
            {isPlusicon ? (
              <img
                src={image ? image : "/images/nuts/casew 210.png"}
                alt="nutmeals"
                className={`${className}`}
              />
            ) : (
              <img
                src={image ? image : "/images/nuts/casew 210.png"}
                alt="nutmeals"
                className={`${className}`}
              />
            )}
            <div
              className={`w-full flex items-center justify-between mt-2 ${
                isPlusicon ? "invisible" : ""
              }`}
            >
              <div className="flex items-center justify-center gap-2">
                <i className="fa-regular fa-thumbs-up text-xl"></i>
                <p
                  className={`${
                    reviewClass ? reviewClass : "text-[13px] pt-1.5"
                  }`}
                >
                  9.9K
                </p>
              </div>
              <p>
                <i className="fa-regular fa-heart text-lg"></i>
              </p>
            </div>
          </div>
          <div className="text-gray-500 mt-2 items-center justify-center text-center">
            <h2 className={`${titleClass ? titleClass : "text-lg"}`}>
              {isPlusicon ? "Select Combo" : "Dry fruits"}
            </h2>
          </div>
          {!showCheckbox && (
            <>
              <div className="justify-center mt-3 group-hover:flex hidden">
                <button className="border border-gray-400 text-xs rounded-md py-1 px-4 hover:bg-[#faa61a] hover:text-white hover:border-[#faa61a] duration-300">
                  {isPlusicon ? "Select Combo" : "Select Option"}
                </button>
              </div>
            </>
          )}
        </div>
      </Link>
    </>
  );
};

export default ProductCard;
