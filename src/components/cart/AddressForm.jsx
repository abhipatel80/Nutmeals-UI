import Link from 'next/link'
import React from 'react'

const AddressForm = () => {
  return (
    <div className="mt-10 w-full auth 4xl-lg:text-xl 6xl:text-2xl">
      <div className="flex gap-7 4xl-lg:gap-10 6xl:gap-12 flex-col">
        <input
          type="text"
          placeholder="Name"
          className="bg-[#f5f5f5] border-b-2 border-gray-400"
        />
        <input
          type="text"
          placeholder="Phone No"
          className="bg-[#f5f5f5] border-b-2 border-gray-400"
        />
        <input
          type="text"
          placeholder="Email"
          className="bg-[#f5f5f5] border-b-2 border-gray-400"
        />
        <input
          type="text"
          placeholder="Address"
          className="bg-[#f5f5f5] border-b-2 border-gray-400"
        />
        <input
          type="text"
          placeholder="Pin Code"
          className="bg-[#f5f5f5] border-b-2 border-gray-400"
        />
      </div>
      <Link href="/cart/payment" className="w-full flex justify-center mt-8">
        <button className="w-fit text-lg rounded-md py-2 px-9 hover:bg-[#faa61a] hover:text-white duration-300 4xl-lg:text-xl 6xl:text-2xl">
          Payment
        </button>
      </Link>
    </div>
  )
}

export default AddressForm