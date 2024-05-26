import ProductCard from "@/components/products/ProductCard";
import Link from "next/link";
import React from "react";

const images = [
  { img: "/images/nuts/chana.png" },
  { img: "/images/nuts/chana.png" },
  { img: "/images/nuts/chana.png" },
  { img: "/images/nuts/chana.png" },
  { img: "/images/nuts/chana.png" },
  { img: "/images/nuts/chana.png" },
  { img: "/images/nuts/chana.png" },
  { img: "/images/nuts/chana.png" },
]

const ComboDeals = () => {
  return (
    <div className="-mt-4 left-div right-div grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xs:gap-4 justify-items-center">
      {images.map((data, i) => {
        let plusIcon;
        { i == 0 ? plusIcon = "isPlusIcon" : plusIcon = "" }
        return (
          <ProductCard
            image={data.img}
            key={data}
            className="w-full object-cover p-1.5 rounded-full"
            titleClass="2xl:text-2xl"
            isPlusicon={plusIcon}
          />
        )
      })}
    </div>
  );
};

export default ComboDeals;
