"use client"
import QueryForm from "@/components/contact/QueryForm";
import ReviewForm from "@/components/contact/ReviewForm";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const Contact = () => {

  const [query, setQuery] = useState(true);
  const [review, setreview] = useState(false);

  const handleQuery = () => {
    setQuery(true)
    setreview(false)
  }
  const handleReview = () => {
    setQuery(false)
    setreview(true)
  }

  const contactDetails = [
    { icon: "/icons/generic_web_icons/black_location.svg", text: "34, GF, Satyam Mall, Opp Saman complex, Nr Mansi Cross Roads, Gujarat 380015" },
    { icon: "/icons/generic_web_icons/black_whatsapp.svg", text: "+91 992 44 55 776" },
    { icon: "/icons/generic_web_icons/black_email.svg", text: "hellonutmeals@gmail.com" },
    { icon: "/icons/black_icon 03.svg", text: "Monday - Saturday : 10:00 - 19:30" },
  ];

  const socialLinks = [
    { href: "/", src: "/icons/generic_web_icons/black_whatsapp.svg", alt: "whatsapp", size: 20 },
    { href: "/", src: "/icons/generic_web_icons/black_instagram.svg", alt: "instagram", size: 20 },
    { href: "/", src: "/icons/generic_web_icons/black_facebook.svg", alt: "facebook", size: 20 },
    { href: "/", src: "/icons/generic_web_icons/black_twitter.svg", alt: "twitter", size: 17 },
    { href: "/", src: "/icons/generic_web_icons/black_linkedin.svg", alt: "linkedin", size: 20 },
    { href: "/", src: "/icons/generic_web_icons/black_youtube.svg", alt: "youtube", size: 20 },
  ];

  return (
    <div className="w-full mt-0 md:mt-10 text-[15px] lg:text-[11px] 1lg:text-[15px] flex flex-wrap 1lg:flex-nowrap justify-center items-start text-[#707070] gap-14">
      <div className="shadow-lg p-4 bg-[#f5f5f5] min-w-[335px] x-md:w-1/3 w-full rounded-xl left-div lg:!mb-36 !mb-0">
        <div className="flex flex-wrap flex-col gap-1.5">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d117498.94342986519!2d72.44513399535548!3d23.029573466819585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x395e8572023223b9%3A0x1c1ba7a0b4387721!2s34%2C%20GF%2C%20Satyam%20Mall%2C%20Vishweshwar%20Temple%20Lane%2C%20Opp%20Saman%20complex%20Nr%20Mansi%20Cross%20Roads%2C%20Gujarat%20380015!3m2!1d23.029594799999998!2d72.5275356!5e0!3m2!1sen!2sin!4v1709921266496!5m2!1sen!2sin"
            className="ifr mb-4 border border-gray-300 rounded-xl outline-none 2xl:h-60"
          ></iframe>
          {contactDetails.map((detail, index) => (
            <div key={index} className={`flex gap-2 pt-1 ${index == 0 ? "items-start" : "items-center"}`}>
              <Image src={detail.icon} width={20} height={20} alt={detail.text.split(',')[0]} className={`duration-300 icon-hover py-2 ${index == 0 ? "-mt-1.5" : ""}`} />
              <p>{detail.text}</p>
            </div>
          ))}
        </div>
        <div className="mr-6 1lg:mr-6 lg:mr-0 flex flex-wrap justify-center items-center gap-2 lg:gap-3 4xl-md:gap-10 mt-4">
          {socialLinks.map((link, index) => (
            <Link key={index} href={link.href} className={`link-hover`}>
              <Image src={link.src} width={link.size} height={link.size} alt={link.alt} />
            </Link>
          ))}
        </div>
      </div>
      <div className="mt-14 x-md:mt-2 mb-36 min-w-[335px] x-md:w-1/4 w-full">
        <div className="flex mb-4 -mt-5">
          <button className={`${query && "text-[#faa61a]"} h-10 w-full font-medium uppercase`} onClick={handleQuery}>
            Query
          </button>
          <button className={`${review && "text-[#faa61a]"} h-10 w-full font-medium uppercase`} onClick={handleReview}>
            Review
          </button>
        </div>
        {query && <QueryForm />}
        {review && <ReviewForm />}
      </div>
      <div className="right-div bg-[#f5f5f5] p-6 min-w-[335px] x-md:w-1/3 w-full shadow-lg rounded-xl relative lg:mt-20">
        <div className="absolute -top-[90px] left-1/2 transform -translate-x-1/2">
          <img
            src="https://images.squarespace-cdn.com/content/v1/559b2478e4b05d22b1e75b2d/1549568089409-SJ70E6DVG3XTE70232OL/Nesbit.jpg"
            alt="blog"
            className="w-[150px] rounded-full"
          />
        </div>
        <div className="h-full overflow-auto services-section">
          <p className="stars text-center mb-5 mt-14">
            <i className="fa-solid fa-star ml-1.5 text-[#ffd43b]"></i>
            <i className="fa-solid fa-star ml-1.5 text-[#ffd43b]"></i>
            <i className="fa-solid fa-star ml-1.5 text-[#ffd43b]"></i>
            <i className="fa-solid fa-star ml-1.5 text-[#ffd43b]"></i>
            <i className="fa-solid fa-star ml-1.5"></i>
          </p>
          <img src="/images/img6.png" className="-mt-4 w-[175px] 2xl:w-[270px] 5xl:w-[300px] m-auto" />
          <p>
            The peanuts were very good and not salted but only roasted as
            mentioned in the packing. Packing was also very good peanuts in a
            plastic bag, in a paper box and shrink wrapped.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
