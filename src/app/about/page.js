"use client"
import React, { useState, useEffect } from "react";
import AboutSection from "@/components/about/AboutSection";
import Services from "@/components/about/Services";

const About = () => {
  const [showButton, setShowButton] = useState(false);

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight =
        "innerHeight" in window
          ? window.innerHeight
          : document.documentElement.offsetHeight;
      const body = document.body;
      const html = document.documentElement;
      const docHeight = Math.max(
        body.scrollHeight,
        body.offsetHeight,
        html.clientHeight,
        html.scrollHeight,
        html.offsetHeight
      );
      const windowBottom = windowHeight + window.pageYOffset;
      if (windowBottom >= docHeight) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    // Event listener for scrolling
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="text-[#707070] relative">
      <AboutSection />
      <div className="flex justify-center w-full">
        <Services />
      </div>
      {showButton && (
        <div onClick={scrollTop} className="fixed right-10 bottom-10">
          <i className="fa-solid fa-arrow-up text-2xl cursor-pointer duration-300 bg-[#f5f5f5] hover:bg-[#faa61a] text-black px-4 py-3 rounded-md"></i>
        </div>
      )}
    </div>
  );
};

export default About;
