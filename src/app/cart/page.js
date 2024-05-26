"use client"
import CartProducts from '@/components/cart/CartProducts'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const Cart = () => {
    const router = usePathname();
    return (
        <div>
            {!router.startsWith("/cart/order-placed")
                &&
                <div className="flex justify-start left-div items-center gap-0 sm:gap-3 4xl-md:gap-16 4xl-md:text-[20px] sm:mb-7 uppercase">
                    <Link
                        href="/cart"
                        className={`flex items-center justify-center gap-2 xs:px-3 pr-3 pl-1 py-1 text-[10px] sm:text-sm rounded-[4px] `}
                    >
                        <input
                            type="checkbox"
                            defaultChecked={router.startsWith("/cart")}
                            className={`cursor-pointer sm:w-[22px] sm:h-[22px] w-[16px] h-[16px] checkbox -mt-[3px] checked:!bg-[#faa61a] checked:!border-transparent`}
                        />
                        Checkout
                    </Link>
                    <Link
                        href="/cart/address"
                        className={`flex items-center justify-center gap-2 xs:px-3 pr-3 py-1 text-[10px] sm:text-sm rounded-[4px]`}
                    >
                        <input
                            type="checkbox"
                            defaultChecked={router.startsWith("/cart/address") || router.startsWith("/cart/payment") || router.startsWith("/cart/order-placed")}
                            className={`cursor-pointer sm:w-[22px] sm:h-[22px] w-[16px] h-[16px] checkbox -mt-[3px] checked:!bg-[#faa61a] checked:!border-transparent`}
                        />
                        Address
                    </Link>
                    <Link
                        href="/cart/payment"
                        className={`flex items-center justify-center gap-2 xs:px-3 pr-3 py-1 text-[10px] sm:text-sm rounded-[4px]`}
                    >
                        <input
                            type="checkbox"
                            defaultChecked={router.startsWith("/cart/payment") || router.startsWith("/cart/order-placed")}
                            className={`cursor-pointer sm:w-[22px] sm:h-[22px] w-[16px] h-[16px] checkbox -mt-[3px] checked:!bg-[#faa61a] checked:!border-transparent`}
                        />
                        Payment
                    </Link>
                    <Link
                        href="/cart/order-placed"
                        className={`flex items-center justify-center gap-2 xs:px-3 pr-3 py-1 text-[10px] sm:text-sm rounded-[4px]`}
                    >
                        <input
                            type="checkbox"
                            defaultChecked={router.startsWith("/cart/order-placed")}
                            className={`cursor-pointer sm:w-[22px] sm:h-[22px] w-[16px] h-[16px] checkbox -mt-[3px] checked:!bg-[#faa61a] checked:!border-transparent`}
                        />
                        Confirm
                    </Link>
                </div>
            }
            {(router != "/cart/payment" && router != "/cart/address" && router != "/cart/order-placed") &&
                <div className='left-div'>
                    <CartProducts className="lg:!w-fit" router={router} />
                </div>
            }
        </div>
    )
}

export default Cart
