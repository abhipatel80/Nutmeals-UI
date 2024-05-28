import React, { useState } from "react";

const ProductImage = () => {
  const images = [
    "/images/nuts/penuts rosted solted.png",
    "/images/nuts/casew 210.png",
    "/images/nuts/chana.png",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="lg:w-[38vw] lg:h-[76.5vh] product-image flex flex-col pt-14 relative border bg-[#f5f5f5] border-gray-300 p-8 rounded-lg">
      <h1 className="text-effect !text-5xl xs:!text-7xl 2xl:!text-8xl absolute top-0 left-1/2 transform -translate-x-1/2 z-0">
        Peanuts
      </h1>
      <div className="relative">
        <img
          src={images[currentIndex]}
          alt="product"
          className="z-10 w-[370px] 2xl:w-[500px] 5xl-lg:w-[600px] rounded-full m-auto"
        />
        <p className="absolute xs:bottom-0 xs:right-0 xxs:right-[-12px] xxs:bottom-[-12px] flex gap-4">
          <i className="fa-regular fa-heart text-[18px] sm:text-[22px]"></i>
          <i className="fa-solid fa-arrow-up-from-bracket text-[18px] sm:text-[22px]"></i>
        </p>
        <div className="absolute top-1/2 left-0 transform -translate-y-1/2">
          <button onClick={prevSlide} className="text-[22px]">
            &#10094;
          </button>
        </div>
        <div className="absolute top-1/2 right-0 transform -translate-y-1/2">
          <button onClick={nextSlide} className="text-[22px]">
            &#10095;
          </button>
        </div>
      </div>
      <div className="mb-3.5 absolute flex items-center justify-center gap-2.5 bottom-0 left-1/2 transform -translate-x-1/2">
        {images.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 border border-gray-500 ${
              index === currentIndex ? "bg-gray-500" : ""
            } rounded-full`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default ProductImage;
