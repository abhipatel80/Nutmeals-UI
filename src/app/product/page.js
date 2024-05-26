"use client";

import React from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

import ProductBenefits from "@/components/singleproduct/ProductBenefits";
import ProductDetails from "@/components/singleproduct/ProductDetails";
import ProductImage from "@/components/singleproduct/ProductImage";
import ProductNutrition from "@/components/singleproduct/ProductNutrition";
import { pdpMenus } from "@/data/menuData";

const Product = () => {
  const router = useSearchParams();
  const query = router.get('q');

  const desc = ["description", "brief", "ingredients"];
  const bene = ["benefits", "rdi"];

  return (
    <div className="w-full flex flex-col justify-center items-center gap-6 -mt-3">
      <div className="flex flex-wrap lg:flex-nowrap justify-center items-start gap-7">
        <div className="left-div">
          <div className="flex gap-8 xxs:gap-5 sm:gap-[40px] lg:gap-[28px] xl:gap-[50px] mb-5">
            {pdpMenus?.slice(0, 3).map((val, i) => (
              <Link
                key={i}
                href={val.href}
                className={`xs:px-3 pr-2 text-[12px] xxs:text-[11px] xs:text-sm 2xl:text-[20px] rounded-[4px]`}
              >
                {val.name}
              </Link>
            ))}
            <p className="ml-auto">
              <img
                src="/icons/filter.svg"
                className="duration-300 sm:w-[26px] w-5 hover:bg-[#faa61a] cursor-pointer rounded-md"
                alt="filter"
              />
            </p>
          </div>
          <ProductImage />
        </div>
        <div className="right-div">
          <div className="flex gap-5 xxs:gap-2 xxs:text-[11px] sm:gap-[50px] lg:gap-[28px] xl:gap-[50px] my-5 sm:mb-6 sm:mt-0">
            {pdpMenus?.slice(3).map((val, i) => {
              const isActive = val.href.includes(query);
              const isBlinking = val.name.toLowerCase() === "buy";
              return (
                <Link
                  key={i + 2}
                  href={val.href}
                  className={`xs:px-3 pr-2 text-[12px] 2xl:text-[20px] xs:text-sm rounded-[4px] ${isActive ? "text-[#faa61a]" : ""
                    } ${isBlinking ? "blink" : ""}`}
                >
                  {val.name}
                </Link>
              )
            })}
          </div>
          {query == "buy" && <ProductDetails />}
          {desc.includes(query) && <ProductBenefits mainQuery={query} option1="brief" option2="ingredients" />}
          {bene.includes(query) && <ProductBenefits mainQuery={query} option1="benefits" option2="rdi" />}
          {query == "nutritions" && <ProductNutrition />}
        </div>
      </div>
    </div>
  );
};

export default Product;