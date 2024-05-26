import React from "react";
import ComboSelectedProduct from "./ComboSelectedProduct";
import Link from "next/link";

const SelectedProducts = ({ className }) => {
  return (
    <div className={`bg-white p-2 pl-3 xs:pl-auto xs:p-6 rounded-2xl right-div ${className}`}>
      <h2 className="xl:text-3xl text-lg">Combo Selection</h2>
      <ComboSelectedProduct mainClassName="large:!w-[35vw] lg:!w-[40vw] xs:!w-[80vw] w-[340px]" />
      <ComboSelectedProduct mainClassName="large:!w-[35vw] lg:!w-[40vw] xs:!w-[80vw] w-[340px]" />
      <ComboSelectedProduct mainClassName="large:!w-[35vw] lg:!w-[40vw] xs:!w-[80vw] w-[340px]" />
      <div className="w-full flex justify-between items-start my-8 text-gray-700">
        <div className="ml-1">Back in shop</div>
        <div className="flex flex-col justify-center items-center gap-x-1.5 mr-3.5 4xl-md:ml-auto 4xl-md:mr-2 text-[16px] 4xl-md:!text-xl">
          <div className="flex items-center justify-between w-full gap-8">
            <p>Subtotal:</p>
            <p className="font-semibold">1,600</p>
          </div>
          <div className="flex items-center justify-between w-full gap-8">
            <p>Discount:</p>
            <p className="font-semibold">100</p>
          </div>
          <div className="flex items-center justify-between w-full gap-8 pt-1">
            <p>Total:</p>
            <p className="font-semibold">1,500</p>
          </div>
        </div>
      </div>
      <div className="flex justify-evenly gap-2">
        <button className="w-fit border border-gray-400 hover:border-[#faa61a] text-lg rounded-md py-2 px-4 hover:bg-[#faa61a] hover:text-white duration-300">
          <img src="/icons/generic_web_icons/add to cart.svg" className="w-5" />
        </button>
        <Link href="/cart/address" className="btn-slide">
            <span className="circle">
              <i className="fa-solid fa-angles-right"></i>
            </span>
            <span className="title">Buy Now</span>
          </Link>
      </div>
    </div>
  );
};

export default SelectedProducts;
