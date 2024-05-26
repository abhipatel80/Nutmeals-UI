import React from 'react'

const PurchaseReview = () => {
    return (
        <div className='w-fit border p-3 rounded-md'>
            <div className='w-full flex items-center justify-center gap-4'>
                <i className="fa-solid fa-plus text-xl"></i>
                <input type="text" className='border max-w-44' />
                <i className="fa-solid fa-camera text-xl"></i>
                <i className="fa-solid fa-video text-xl"></i>
                <i className="fa-solid fa-microphone text-xl"></i>
            </div>
            <div className='flex items-center justify-center gap-4 mt-7'>
                <p>Rate:</p>
                <i className="fa-regular fa-heart text-xl"></i>
                <i className="fa-regular fa-heart text-xl"></i>
                <i className="fa-regular fa-heart text-xl"></i>
                <i className="fa-regular fa-heart text-xl"></i>
                <i className="fa-regular fa-heart text-xl"></i>
            </div>
            <div className='flex items-center justify-center gap-4 mt-7'>
                <p>Recommendation:</p>
                <i className="fa-regular fa-thumbs-up text-3xl"></i>
                <i className="fa-regular fa-thumbs-down text-3xl"></i>
            </div>
            <div className='flex justify-center items-center'>
                <p className="mt-7 text-lg hover:bg-[#faa61a] hover:text-white rounded-md py-1 px-4 cursor-pointer">
                    Next
                </p>
            </div>
        </div>
    )
}

export default PurchaseReview
