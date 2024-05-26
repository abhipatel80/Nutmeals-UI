import React from 'react'
import ProductSelection from '@/components/combodeals/ProductSelection'
import SelectedProducts from '@/components/combodeals/SelectedProducts'

const ComboProducts = () => {
    return (
        <div className="w-full relative flex flex-wrap lg:flex-nowrap justify-center items-start gap-8">
            <ProductSelection />
            <div className='sticky top-7'>
                <SelectedProducts />
            </div>
        </div>
    )
}

export default ComboProducts
