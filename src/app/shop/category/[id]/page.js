import ProductCard from "@/components/products/ProductCard";
import React from "react";

export const images = [
  { img: "/images/nuts/chana.png" },
  { img: "/images/nuts/chana.png" },
  { img: "/images/nuts/chana.png" },
  { img: "/images/nuts/chana.png" },
  { img: "/images/nuts/chana.png" },
  { img: "/images/nuts/chana.png" },
  { img: "/images/nuts/chana.png" },
  { img: "/images/nuts/chana.png" },
]

const Product = () => {
  return (
    <div className="-mt-4 left-div right-div grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xs:gap-4 justify-items-center">
      {images.map((data) => {
        return (
          <ProductCard
            image={data.img}
            key={data}
            className="w-full object-cover p-1.5 rounded-full"
            titleClass="2xl:text-2xl"
          />
        )
      })}
    </div>
  );
};

export default Product;
