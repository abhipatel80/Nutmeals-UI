import React from "react";
import ProductCard from "../products/ProductCard";

const ProductSelection = () => {
  return (
    <div className="left-div">
      <div className="flex w-full flex-wrap ml-1 gap-x-12 gap-y-3 justify-center md:justify-start items-center">
        <p>nuts</p>
        <p>seeds</p>
        <p>millets</p>
        <p>super foods</p>
        <p>dried fruits</p>
        <p>nosh on</p>
        <p>energy bar</p>
        <p>spreads</p>
        <p>ethenic bevrages</p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-0 sm:gap-4 justify-items-center py-4">
        {[1, 2, 3, 4, 5, 6, 7, 8].map((data) => {
          return (
            <ProductCard
              key={data}
              className="w-full"
              titleClass="!text-sm"
              reviewClass="text-[11px]"
              showCheckbox
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProductSelection;
