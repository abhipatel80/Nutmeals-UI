import ProductCard from "@/components/products/ProductCard";
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

const BestSeller = () => {
  return (
    <div className="-mt-4 left-div right-div grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xs:gap-x-4 gap-y-0 justify-items-center">
      {images.map((data, index) => {
        return (
          <ProductCard
            key={index}
            image={data.img}
            className="w-full object-cover p-1.5 rounded-full"
            titleClass="2xl:text-2xl"
          />
        );
      })}
    </div>
  );
};

export default BestSeller;
