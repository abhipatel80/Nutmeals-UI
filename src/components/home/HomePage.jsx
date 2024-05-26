"use client";

import { useEffect, useState } from "react";
import ProductCategory from "../products/ProductCategory";
import Cashew from "../cashew/Cashew";
import Contact from "@/app/contact/page";
import { productCategories } from "@/data/productCategory";
import HorizontalCarousel from "@/components/common/HorizontalCarousel";

export default function Home() {
  const [isHover, setIsHover] = useState(false);
  const [currentSlideNumber, setCurrentSlideNumber] = useState(0);
  const images = ["/images/img6.png", "/images/img10.png", "/images/img13.png"];
  const totalSlideNumber = 3; // Adjust based on the actual number of slides

  const handleMouseEnter = () => setIsHover(true);
  const handleMouseLeave = () => setIsHover(false);

  const parallaxScroll = (evt) => {
    let delta;
    if (/Firefox/i.test(navigator.userAgent)) {
      delta = evt.detail * -120;
    } else if (
      /MSIE/i.test(navigator.userAgent) ||
      /Trident.*rv\:11\./i.test(navigator.userAgent)
    ) {
      delta = -evt.deltaY;
    } else {
      delta = evt.wheelDelta;
    }

    if (delta <= -30) {
      // Down scroll
      if (currentSlideNumber !== totalSlideNumber - 1) {
        setCurrentSlideNumber(currentSlideNumber + 1);
      }
    } else if (delta >= 30) {
      // Up scroll
      if (currentSlideNumber !== 0) {
        setCurrentSlideNumber(currentSlideNumber - 1);
      }
    }
  };

  useEffect(() => {
    const mousewheelEvent = /Firefox/i.test(navigator.userAgent)
      ? "DOMMouseScroll"
      : "wheel";
    window.addEventListener(mousewheelEvent, parallaxScroll, false);

    return () => {
      window.removeEventListener(mousewheelEvent, parallaxScroll, false);
    };
  }, [currentSlideNumber]);

  const getBackgroundClass = (index) => {
    if (index < currentSlideNumber) return "background up-scroll";
    if (index > currentSlideNumber) return "background down-scroll";
    return "background";
  };

  return (
    <div className="left-div right-div flex flex-col gap-20 container">
      <div className={getBackgroundClass(0)}>
        <div className="content-wrapper">
          <div
            className="relative w-full flex justify-center items-center mb-10 border p-4 border-gray-300 bg-[#f5f5f5] rounded-2xl shadow-md"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <HorizontalCarousel images={images} isHover={isHover} />
          </div>
          <div className="w-full flex flex-wrap items-start justify-center gap-10">
            {productCategories.map((category, index) => (
              <ProductCategory
                key={index}
                title={category.title}
                image={category.image}
                className="xl:w-[65px] 2xl:w-[75px] w-[75px] hover:w-[75px] rounded-full duration-200 hover:bg-[#F8A531] border p-1.5"
                mainDivClassname="max-w-24 flex items-center justify-start flex-col"
              />
            ))}
          </div>
        </div>
      </div>

      <div className={getBackgroundClass(1)}>
        <div className="content-wrapper">
          <Cashew
            title="Cashew"
            description="Mauris mattis auctor cursus. Phasellus tellus tellus, imperdiet ut imperdiet eu, iaculis a sem. Donec vehicula luctus nunc in laoreet..."
            image="/images/nuts/casew 240.png"
            className="rounded-full"
          />
        </div>
      </div>

      <div className={getBackgroundClass(2)}>
        <div className="content-wrapper">
          <Contact />
        </div>
      </div>
    </div>
  );
}
