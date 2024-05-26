import React from "react";
import ComboSelectedProduct from "../combodeals/ComboSelectedProduct";
import Link from "next/link";

const CartProducts = ({ className, router }) => {
  return (
    <div className={`rounded-2xl ${className}`}>
      <ComboSelectedProduct mainClassName="large:!w-[35vw] lg:!w-[40vw] xs:!w-[80vw] w-[370px]" />
      <ComboSelectedProduct mainClassName="large:!w-[35vw] lg:!w-[40vw] xs:!w-[80vw] w-[370px]" />
      <ComboSelectedProduct mainClassName="large:!w-[35vw] lg:!w-[40vw] xs:!w-[80vw] w-[370px]" />
      <ComboSelectedProduct mainClassName="large:!w-[35vw] lg:!w-[40vw] xs:!w-[80vw] w-[370px]" />
      <ComboSelectedProduct mainClassName="large:!w-[35vw] lg:!w-[40vw] xs:!w-[80vw] w-[370px]" />
      <div className="4xl-lg:text-xl large:!w-[35vw] lg:!w-[40vw] xs:!w-[80vw] w-[370px] flex justify-between items-start my-5 text-[#707070]">
        <Link href="/shop" className="ml-1 cursor-pointer hover:text-[#faa61a]">
          Back in shop
        </Link>
        <div className="flex flex-col justify-center items-center gap-x-1.5">
          <div className="flex items-center justify-between w-full gap-8">
            <p>Subtotal:</p>
            <p className="text-lg mr-3.5">1,600</p>
          </div>
        </div>
      </div>
      {router == "/cart" && (
        <Link href="/cart/address" className="w-full flex justify-end">
          <button className="w-fit text-lg rounded-md py-2 px-9 hover:bg-[#faa61a] hover:text-white duration-300">
            Check Out
          </button>
        </Link>
      )}
    </div>
  );
};

export default CartProducts;
