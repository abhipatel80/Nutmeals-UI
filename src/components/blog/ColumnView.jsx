import BlogColumnView from "@/components/blog/BlogColumnViewCard";
import React from "react";

const ColumnView = () => {
  return (
    <div className="w-full flex lg:flex-nowrap flex-wrap justify-center items-start gap-10">
      <div className="left-div flex lg:w-1/2 items-center justify-center border bg-[#f5f5f5] p-2 rounded-lg">
        <img src="/images/img6.png" alt="blog" className="w-full" />
      </div>
      <div className="right-div lg:w-1/2">
        <BlogColumnView color="bg-[#92BC44]" img="/images/img10.png" />
        <BlogColumnView color="bg-[#D4374B]" img="/images/img11.png" />
        <BlogColumnView color="bg-[#EAA74F]" img="/images/img13.png" />
        <BlogColumnView color="bg-blue-400" img="/images/img10.png" />
      </div>
    </div>
  );
};

export default ColumnView;
