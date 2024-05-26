import React from 'react'
import Cart from '../page'
import AddressForm from '@/components/cart/AddressForm'
import CartProducts from '@/components/cart/CartProducts'

const Address = () => {
  return (
    <div>
      <Cart />
      <div className='w-full flex flex-wrap lg:flex-nowrap justify-center items-start gap-5 lg:gap-20'>
        <div className='lg:w-[40vw] w-full flex flex-col lg:justify-start justify-center left-div'>
          <CartProducts />
        </div>
        <div className="lg:w-[40vw] right-div w-full bg-[#f5f5f5] px-10 pb-8 pt-3 rounded-xl shadow-xl">
          <AddressForm />
        </div>
      </div>
    </div>
  )
}

export default Address
