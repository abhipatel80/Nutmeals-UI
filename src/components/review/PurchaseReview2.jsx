"use client"
import React, { useState } from 'react'

const PurchaseReview2 = () => {
    const [selectedHashtags, setSelectedHashtags] = useState([]);

    const toggleHashtag = (hashtag) => {
        if (selectedHashtags.includes(hashtag)) {
            setSelectedHashtags(selectedHashtags.filter((item) => item !== hashtag));
        } else {
            setSelectedHashtags([...selectedHashtags, hashtag]);
        }
    };

    const hashtags = [
        "#quality", "#grade", "#benefits", "#satisfication", "#expectation", "#requirements", "#comprehensive",
        "#needs", "#productrange", "#availability", "#customerrequest", "#value", "#paymentoptions", "#price",
        "#attractiveoffer", "#savings", "#einvoice", "#queryresponse", "#responsetime", "#T&C", "#deliveryoptions",
        "#deliverycost", "#deliverytime", "#packaging", "#packagecondition", "#productinformation", "#transparency",
        "#explanation", "#assistance", "#webnavigation", "#websearch", "#solution", "#aftersalessupport", "#attentive",
        "#mature", "#qualifiedstaff", "#reachablehours", "#shoppingexperience", "#patronage", "#moneysaver",
        "#valueformoney", "#instoreavailability", "#waitingtime", "#turnaroundtime", "#facility", "#takeaway",
        "#considerate", "#freedomtochoose", "#customtailored", "#bespoke", "#transparentcommunicaiton", "#reasonable",
        "#transactions", "#returns", "#decoration", "#onlinepurchase", "#offlinepurchase", "#delivery", "#time",
        "#vibe", "#staff", "#gift", "#authority", "#premium"
    ];

    return (
        <div className='max-w-[500px] w-fit border p-4 rounded-md'>
            <p className="w-fit mt-7 text-lg hover:bg-[#faa61a] hover:text-white rounded-md py-1 px-4 cursor-pointer">
                Back
            </p>
            <p>what's driving your review</p>
            <div>
                {hashtags.map((hashtag, index) => (
                    <label key={index} className="inline-flex items-center mt-3">
                        <input
                            type="checkbox"
                            className="form-checkbox h-4 w-4 text-gray-600"
                            value={hashtag}
                            onChange={() => toggleHashtag(hashtag)}
                        />
                        <span className="mr-3 ml-1">{hashtag}</span>
                    </label>
                ))}
            </div>
            <div className='mt-5 w-fit flex flex-col items-start justify-center'>
                <p>Share / Edit your Feedback</p>
                <textarea rows={6} className='resize-none border rounded-md w-[467px]' />
                <button className="m-auto mt-5 w-fit text-[16px] rounded-md py-1 px-5 hover:bg-[#faa61a] hover:text-white duration-300">
                    Submit
                </button>
            </div>
        </div>
    )
}

export default PurchaseReview2
