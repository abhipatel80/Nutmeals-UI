import React from "react";
import ProductDescription from "./ProductDescription";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

const ProductBenefits = ({ option1, option2, mainQuery }) => {
  const router = useSearchParams();
  const query = router.getAll("q");
  const menuQuery = router.get("menu");

  return (
    <div className="lg:w-[42vw] xl:w-[38vw] w-full lg:h-[77vh] product-scrollbar overflow-auto flex justify-center items-start border bg-[#f5f5f5] border-gray-300 rounded-lg">
      <div className="w-full ">
        <div className="flex justify-evenly border-b">
          <Link
            href={`/product?q=${mainQuery}&menu=${option1}`}
            className="w-full border-r text-center py-2"
          >
            <button
              className={`${
                (query.includes(option1) && !mainQuery) || menuQuery == option1
                  ? "text-[#faa61a]"
                  : ""
              } font-medium uppercase`}
            >
              {option1}
            </button>
          </Link>
          <Link
            href={`/product?q=${mainQuery}&menu=${option2}`}
            className="w-full border-r text-center py-2"
          >
            <button
              className={`${
                query.includes(option2) || menuQuery == option2
                  ? "text-[#faa61a]"
                  : ""
              } font-medium uppercase`}
            >
              {option2}
            </button>
          </Link>
        </div>
        <ProductDescription />
      </div>
    </div>
  );
};

export default ProductBenefits;
