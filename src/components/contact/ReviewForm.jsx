import Link from "next/link";
import React from "react";

const ReviewForm = () => {
  return (
    <div className="border rounded-md p-4 2xl:h-[495px] h-[428px]">
      <h2 className="text-center text-2xl mb-7">Review</h2>
      <p>We appreciate feedback about your experience</p>
      <Link href="/auth" className="w-full flex justify-center mt-8">
        <button className="w-fit text-lg rounded-md py-1.5 px-7 hover:bg-[#faa61a] hover:text-white duration-300">
          Login
        </button>
      </Link>
    </div>
  );
};

export default ReviewForm;
