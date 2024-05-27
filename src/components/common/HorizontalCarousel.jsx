"use client";
import { useState } from "react";

export default function HorizontalCarousel({ slides, isHover }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const selectSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="flex items-center justify-center flex-col px-10">
      <div className="flex justify-center items-center gap-1 md:gap-20 md:flex-nowrap flex-wrap">
        <div className="md:w-1/2 w-full">
          <img
            src={slides[currentSlide].image}
            alt="carousel"
            className="h-[300px] object-contain m-auto"
          />
        </div>
        <div className="md:w-1/2 w-full">
          <h2 className="mb-4 text-xl">{slides[currentSlide].title}</h2>
          <p className="text-sm">
            {slides[currentSlide].description}
          </p>
        </div>
        {isHover && (
          <>
            <button
              onClick={prevSlide}
              className="absolute left-5 top-1/2 transform -translate-y-1/2 px-3 py-1 !pt-[5px] text-center bg-white text-black rounded-full"
            >
              <i className="fa-solid fa-chevron-left"></i>
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-5 top-1/2 transform -translate-y-1/2 px-3 py-1 !pt-[5px] text-center bg-white text-black rounded-full"
            >
              <i className="fa-solid fa-chevron-right"></i>
            </button>
          </>
        )}
      </div>
      <div className="flex justify-center mt-4">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => selectSlide(index)}
            className={`h-3 w-3 rounded-full mx-1.5 ${
              currentSlide === index
                ? "border border-gray-800 bg-gray-800"
                : "border border-gray-400"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
}
