import React from 'react'
import PaymentForm from '@/components/cart/PaymentForm'
import CartProducts from '@/components/cart/CartProducts'
import ChangeAddress from '@/components/cart/ChangeAddress'
import Cart from '../page'

const Payment = () => {
  return (
    <div>
      <Cart />
      <div className='w-full flex flex-wrap lg:flex-nowrap justify-center items-start gap-5 lg:gap-20'>
        <div className='lg:w-[40vw] w-full flex flex-col lg:justify-start justify-center left-div'>
          <ChangeAddress />
          <CartProducts />
        </div>
        <div className="lg:w-[40vw] 5xl:max-w-[30vw] w-full right-div bg-[#f5f5f5] px-10 pb-8 pt-3 rounded-xl shadow-xl">
          <PaymentForm />
        </div>
      </div>
    </div>
  )
}

export default Payment
