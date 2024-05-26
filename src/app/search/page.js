"use client"
import React, { useState } from 'react'

const Search = () => {
    const [search, setsearch] = useState();

    return (
        <div className='w-full left-div right-div border-b border-x rounded-br-3xl rounded-bl-3xl border-gray-400 p-8 !mt-[-32px] md:!mt-[-41px]'>
            <div className={search ? 'mb-9' : ''}>
                <input value={search} onChange={(e) => setsearch(e.target.value)} type="text" placeholder='Search' className='border-b outline-none w-full border-solid bg-gray-100 border-[#F8A531] text-[#F8A531] placeholder-[#F8A531]' />
            </div>
            {search &&
                <div className='w-full flex items-center flex-wrap justify-between'>
                    <div className='flex flex-col gap-4'>
                        <p>store location</p>
                        <p>whatsapp</p>
                        <p>phone</p>
                    </div>
                    <div className='flex flex-col gap-4'>
                        <p>shop</p>
                        <p>blog</p>
                        <p>scanner</p>
                    </div>
                    <div className='flex flex-col gap-4 mr-6'>
                        <p>facebook</p>
                        <p>instagram</p>
                        <p>X</p>
                    </div>
                </div>
            }
        </div>
    )
}

export default Search
