import React from "react";

const descriptions = [
  {
    title: "PRIMARY",
    text: "lorem ipsum dolor sit amet, consectetur adip lorem nisl, sed diam nonumy eirmod tempor incididunt ut labore et dolore mag at vero e obet. Ut enim ad minim veniam,",
  },
  {
    title: "PRIMARY",
    text: "lorem ipsum dolor sit amet, consectetur adip lorem nisl, sed diam nonumy eirmod tempor incididunt ut labore et dolore mag at vero e obet. Ut enim ad minim veniam,",
  },
  {
    title: "PRIMARY",
    text: "lorem ipsum dolor sit amet, consectetur adip lorem nisl, sed diam nonumy eirmod tempor incididunt ut labore et dolore mag at vero e obet. Ut enim ad minim veniam,",
  },
  {
    title: "PRIMARY",
    text: "lorem ipsum dolor sit amet, consectetur adip lorem nisl, sed diam nonumy eirmod tempor incididunt ut labore et dolore mag at vero e obet. Ut enim ad minim veniam,",
  },
];

const ProductDescription = () => {
  return (
    <div className="px-4 py-2 xs:px-8 xs:py-4">
      {descriptions.map((description, index) => (
        <div key={index} className="flex items-start justify-center my-3">
          <div className="flex items-start justify-center flex-col">
            <div className="h-16 w-16 2xl:h-20 2xl:w-20 rounded-full border border-black"></div>
            <p className="mt-2 text-[14px] 2xl:text-[16px] text-center">{description.title}</p>
          </div>
          <div className="ml-8 text-[14px] 2xl:text-[18px]">
            <p>{description.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductDescription;
