import PurchaseReview from '@/components/review/PurchaseReview'
import PurchaseReview2 from '@/components/review/PurchaseReview2'
import React from 'react'

const Review = () => {
    return (
        <div className='flex items-start justify-start gap-7 flex-wrap'>
            <PurchaseReview />
            <PurchaseReview2 />
        </div>
    )
}

export default Review
