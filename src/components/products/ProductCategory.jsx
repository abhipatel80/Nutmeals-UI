import Link from "next/link";
import React from "react";

const ProductCategory = ({ title, className, handle, image, mainDivClassname, titleWidth }) => {
  return (
    <Link href={`/shop/${handle}`}>
      <div className={`${mainDivClassname}`}>
        <img
          src={`${image ? image : "/icons/product_category_icons/1 nuts.svg"}`}
          alt="nuts"
          className={className}
        />
        <p className={`text-center text-[12px] md:text-[15px] mt-2 leading-4 ${titleWidth}`}>{title}</p>
      </div>
    </Link>
  );
};

export default ProductCategory;
