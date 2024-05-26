"use client"
import React, { useEffect, useState } from 'react'

const QueryForm = () => {
    const [rows, setRows] = useState(10);

    useEffect(() => {
        function handleResize() {
            if (window.innerWidth <= 1230 && window.innerWidth >= 1024) {
                setRows(10);
            } else {
                setRows(8);
            }
        }

        handleResize();

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <form className="w-full flex flex-col gap-4 auth">
            <input type="text" placeholder="Name" className="contact-input" />
            <input type="email" placeholder="Email" className="contact-input" />
            <input type="tel" placeholder="Phone No" className="contact-input" />
            <textarea rows={rows} placeholder="Message" className="contact-input" />
            <button
                type="submit"
                className="w-fit border hover:border-[#faa61a] text-[16px] hover:bg-[#faa61a] hover:text-white duration-300 border-solid border-gray-400 py-1.5 px-5 rounded-md text-[#707070]"
            >
                Submit
            </button>
        </form>
    )
}

export default QueryForm