import ProductCategory from "@/components/products/ProductCategory";
import React from "react";

const Shop = () => {
  const productCategories = [
    {
      title: "Products by Category",
      handle: "category",
      className: "border-2 border-gray-400 p-4 lg:w-[180px] w-[125px] hover:bg-[#f5f5f5] duration-300 rounded-full",
      mainDivClassname: "flex items-center flex-col",
      titleWidth: "mt-5",
    },
    {
      title: "Best Sellers",
      handle: "bestseller",
      className: "border-2 border-gray-400 p-4 lg:w-[180px] w-[125px] hover:bg-[#f5f5f5] duration-300 rounded-full",
      mainDivClassname: "flex items-center flex-col",
      titleWidth: "mt-5",
    },
    {
      title: "Combo Deals",
      handle: "combodeals",
      className: "border-2 border-gray-400 p-4 lg:w-[180px] w-[125px] hover:bg-[#f5f5f5] duration-300 rounded-full",
      mainDivClassname: "flex items-center flex-col",
      titleWidth: "mt-5",
    },
  ];

  return (
    <div className="w-full flex flex-wrap justify-center items-center gap-8 h-[60vh] sm:gap-14 sm:h-[78.4vh]">
      {productCategories.map((category, index) => (
        <ProductCategory
          key={index}
          title={category.title}
          handle={category.handle}
          className={category.className}
          titleWidth={category.titleWidth}
          mainDivClassname={category.mainDivClassname}
        />
      ))}
    </div>
  );
};

export default Shop;