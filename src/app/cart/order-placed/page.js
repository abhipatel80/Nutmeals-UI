import Link from 'next/link'
import React from 'react'
import Cart from '../page'

const OrderPlaced = () => {
  return (
    <>
      <Cart />
      <div className='flex items-center justify-center w-full h-[68vh]'>
        <div className='rounded-lg p-20 md:min-w-[500px] max-w-[700px] min-h-[350px] flex flex-col items-center justify-center text-[#707070] bg-[#f5f5f5]'>
          <p className='text-[16px] text-center font-semibold'>Thanks for placing your order with us. Your package is being processed and will be on its way soon. You can track your order at <span className='underline'>http://bit.ly/p1we1</span></p>
          <Link href="/shop" className="w-full flex justify-center mt-8">
            <button className="w-fit text-sm rounded-md py-1.5 px-5 hover:bg-[#faa61a] hover:text-white duration-300">
              Back to Shop
            </button>
          </Link>
        </div>
      </div>
    </>
  )
}

export default OrderPlaced
