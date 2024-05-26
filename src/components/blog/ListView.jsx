import BlogCard from "@/components/blog/BlogCard";
import React from "react";

const ListView = () => {
  return (
    <div className="left-div right-div">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 sm:gap-8 gap-5">
        <BlogCard img="/images/img10.png" color="bg-[#92BC44]" link="/blog/2" />
        <BlogCard img="/images/img11.png" color="bg-[#D4374B]" link="/blog/2" />
        <BlogCard img="/images/img13.png" color="bg-[#EAA74F]" link="/blog/2" />
        <BlogCard img="/images/img10.png" color="bg-blue-400" link="/blog/2" />
        <BlogCard img="/images/img10.png" color="bg-[#92BC44]" link="/blog/2" />
        <BlogCard img="/images/img10.png" color="bg-[#D4374B]" link="/blog/2" />
      </div>
    </div>
  );
};

export default ListView;
