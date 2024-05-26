"use client";
import React from "react";

const AboutSection = () => {
  return (
    <div className="w-full font-normal flex lg:justify-around justify-center items-start h-full lg:gap-[65px] flex-wrap lg:flex-nowrap gap-6">
      <div className="image w-full left-div">
        <video
          controls
          autoPlay
          muted
          className="h-[550px] 4xl:h-[700px] 5xl-lg:h-[600px] w-[800px] border border-gray-300 bg-[#f5f5f5] rounded-2xl py-10 shadow-md"
        >
          <source src="/videos/nutmeals 2.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="content 2xl:text-[16px] 4xl:text-[20px] right-div flex flex-col gap-3 w-full md:text-[14px] leading-[1.6] text-[12px] tracking-wider">
        <p>
          nutmeals (nutrition meals) is guided by philosophy: "food as a
          preventive pharmacy"
        </p>
        <p>
          Our intention is to educate consumers about FUNCTIONAL, HEALTHY &
          DIVERSE food options available based on their lifestyle and medical
          profile.
        </p>
        <p>
          We have outlined and introduced the TREE OF NUTRITIONAL WELL BEING for
          the community that highlights PROBLEM, SOLUTION and SOURCES of healthy
          and nutritious food.
        </p>
        <p>
          The portfolio for Investment in nutrition (aka category of products)
          includes nuts, seeds, dried fruits, millets, energy bars, nosh on,
          spreads, ethnic beverages and gifts.
        </p>
        <p>
          The functional properties of foods are further enhanced by processing
          techniques. we invite you to experience - an environment friendly and
          state of the art small scale processing technology of nuts, seeds and
          other products at our facility.
        </p>
        <p>
          Our entire value chain cares for HEALTH and HYGIENE, Consistency in
          SELECTION (sorted & graded) and SOURCING of materials based on
          products source (location), nutrition (value) and ENVIRONMENT FRIENDLY
          (non-polluting) process.
        </p>
      </div>
    </div>
  );
};

export default AboutSection;
