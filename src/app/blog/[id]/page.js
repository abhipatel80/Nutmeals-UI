"use client"
import BlogCard from "@/components/blog/BlogCard";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const SingleBlog = () => {
  const [showButton, setShowButton] = useState(false);

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight =
        "innerHeight" in window
          ? window.innerHeight
          : document.documentElement.offsetHeight;
      const body = document.body;
      const html = document.documentElement;
      const docHeight = Math.max(
        body.scrollHeight,
        body.offsetHeight,
        html.clientHeight,
        html.scrollHeight,
        html.offsetHeight
      );
      const windowBottom = windowHeight + window.pageYOffset;
      if (windowBottom >= docHeight) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      <div className="relative text-[#707070] md:text-[15px] leading-[1.6] text-sm tracking-wider font-normal">
        <div className="flex flex-wrap w-full gap-8 items-start md:justify-center lg:justify-start justify-start">
          <div className="relative lg:w-1/2 xl:w-[45%] flex items-center justify-center p-4 border rounded-xl">
            <img src="/images/img10.png" alt="blog" className="w-full" />
            <p className="absolute bottom-2.5 right-4">
              <i className="fa-regular fa-heart text-2xl"></i>
            </p>
          </div>
          <div className="large:w-1/2 lg:w-[45%] flex flex-col gap-4">
            <p>
              nutmeals (nutrition meals) is guided by philosophy: "food as a
              preventive pharmacy"
            </p>
            <p>
              Our intention is to educate consumers about FUNCTIONAL, HEALTHY &
              DIVERSE food options available based on their lifestyle and medical
              profile.
            </p>
            <p>
              We have outlined and introduced the TREE OF NUTRITIONAL WELL BEING
              for the community that highlights PROBLEM, SOLUTION and SOURCES of
              healthy and nutritious food.
            </p>
            <p>
              The portfolio for Investment in nutrition (aka category of products)
              includes nuts, seeds, dried fruits, millets, energy bars, nosh on,
              spreads, ethnic beverages and gifts.
            </p>
            <p>
              nutmeals (nutrition meals) is guided by philosophy: "food as a
              preventive pharmacy".
            </p>
          </div>
        </div>
        <div className="w-full flex flex-col gap-4 mt-10">
          <p>
            Our entire value chain cares for HEALTH and HYGIENE, Consistency in
            SELECTION (sorted & graded) and SOURCING of materials based on
            products source (location), nutrition (value) and ENVIRONMENT FRIENDLY
            (non-polluting) process.
          </p>
          <p>
            nutmeals – Prescribed Nutrition Meals Welcome to nutmeals, where our
            philosophy of 'food as a preventive pharmacy' drives us to educate
            consumers about the abundance of functional, healthy and diverse food
            options tailored to their lifestyle and medical profile.
          </p>
          <p>
            At nutmeals, we aim to spread education and guidance to consumers,
            offering functional, healthy and diverse nutrition products that are
            tailored to their lifestyle and medical profile. Our revolutionary
            inception- The Tree of Nutritional Well-Being, led to a wide portfolio
            of the best nutrition products in India. These include nuts, seeds,
            dried fruits, millet, energy bars, spreads, beverages and gifts. All
            of these diet snacks satisfy both taste buds and nutritional needs
            while being all-natural. Furthermore, we also prioritize
            environmentally friendly practices throughout our value chain.
          </p>
          <p>
            Our Products Reflect Our Credibility! nutmeals, the leading online
            store, guarantees the freshest and finest dry fruits and nutrition
            products, sourced from various geographical regions of India. Along
            with providing the best nutrition products in India, we ensure optimal
            affordability as the products are available at wholesale prices.
            nutmeals feels proud to tell you that we offer the fastest delivery
            services in Ahmedabad and across India. We are among the most reliable
            online stores for dry fruits, offering diet snacks online in India.
            Our motto is to continue serving our valuable customers with nothing
            less than the best.
          </p>
        </div>
      </div>
      <hr className="mt-7 border-[#faa61a]" />
      <Link href="/blog" className="w-full flex justify-end my-3">
        <button className="w-fit hover:border-[#faa61a] rounded-md py-1.5 px-5 hover:bg-[#faa61a] hover:text-white duration-300">
          Back to Blog
        </button>
      </Link>
      <div className="w-full flex lg:flex-nowrap flex-wrap justify-center items-start gap-5 2xl:gap-10">
        <BlogCard img="/images/img10.png" color="bg-[#92BC44]" link="/blog/2" />
        <BlogCard img="/images/img11.png" color="bg-[#D4374B]" link="/blog/2" />
        <BlogCard img="/images/img13.png" color="bg-[#EAA74F]" link="/blog/2" />
      </div>
      {showButton && (
        <div onClick={scrollTop} className="fixed right-10 bottom-10">
          <i className="fa-solid fa-arrow-up text-2xl cursor-pointer duration-300 bg-[#f5f5f5] hover:bg-[#faa61a] text-black px-4 py-3 rounded-md"></i>
        </div>
      )}
    </div>
  );
};

export default SingleBlog;
