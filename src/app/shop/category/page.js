"use client"

import React, { useEffect, useState } from "react";
import ProductCategory from "@/components/products/ProductCategory";
import { productCategories2, productCategories1 } from "@/data/productCategory";

const Category = () => {
  const [windowWidth, setWindowWidth] = useState(null);

  useEffect(() => {
    const handleResize = () => {
      if (typeof window !== 'undefined') {
        setWindowWidth(window.innerWidth);
      }
    };

    if (typeof window !== 'undefined') {
      setWindowWidth(window.innerWidth);
      window.addEventListener('resize', handleResize);
    }

    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('resize', handleResize);
      }
    };
  }, []);

  const combinedCategories = windowWidth && windowWidth <= 1015 ? [...productCategories1, ...productCategories2] : null;

  return (
    <div className="right-div left-div !h-[78vh] -mt-3">
      <div>
        {!combinedCategories &&
          <>
            <div className="w-full flex justify-center items-center flex-wrap lg:flex-nowrap gap-8 sm:gap-[70px] 2xl:gap-20 my-8">
              {productCategories1.map((category, index) => (
                <ProductCategory
                  key={index}
                  title={category.title}
                  image={category.image}
                  className="lg:w-full w-[124px] rounded-full hover:bg-[#f5f5f5] duration-300 border-2 border-gray-400 p-3"
                  handle={`/category/${index + 1}`}
                  titleWidth="max-w-28 xl:text-[20px] text-center mt-4"
                  mainDivClassname="flex items-center justify-start flex-col"
                />
              ))}
            </div>
            <div className="w-full flex justify-start items-start flex-wrap lg:flex-nowrap gap-8 sm:gap-[70px] 2xl:gap-20">
              {productCategories2.map((category, index) => (
                <ProductCategory
                  key={index}
                  title={category.title}
                  image={category.image}
                  className="lg:w-full w-[124px] rounded-full hover:bg-[#f5f5f5] duration-300 border-2 border-gray-400 p-3"
                  handle={`/category/${index + 1}`}
                  titleWidth="max-w-28 xl:text-[20px] text-center mt-4"
                  mainDivClassname="flex items-center justify-start flex-col"
                />
              ))}
            </div>
          </>
        }
        <div className="w-full flex justify-start items-start flex-wrap lg:flex-nowrap sm:gap-[70px] gap-8 2xl:gap-20 my-14">
          {combinedCategories && combinedCategories.map((category, index) => (
            <ProductCategory
              key={index}
              title={category.title}
              image={category.image}
              className="lg:w-full w-[80px] sm:w-[124px] rounded-full hover:bg-[#f5f5f5] duration-300 border-2 border-gray-400 p-2 sm:p-3"
              handle={`/category/${index + 1}`}
              titleWidth="max-w-28 text-center mt-4"
              mainDivClassname="flex items-center sm:max-w-full max-w-20 flex-col"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Category;
