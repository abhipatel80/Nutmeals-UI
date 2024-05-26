"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const socialLinks = [
  {
    href: "/",
    src: "/icons/generic_web_icons/whatsapp.svg",
    alt: "whatsapp",
    width: 20,
    height: 20,
  },
  {
    href: "/",
    src: "/icons/generic_web_icons/instagram.svg",
    alt: "instagram",
    width: 20,
    height: 20,
  },
  {
    href: "/",
    src: "/icons/generic_web_icons/facebook.svg",
    alt: "facebook",
    width: 20,
    height: 20,
  },
  {
    href: "/",
    src: "/icons/generic_web_icons/twitter.svg",
    alt: "twitter",
    width: 17,
    height: 17,
  },
  {
    href: "/",
    src: "/icons/generic_web_icons/linkedin.svg",
    alt: "linkedin",
    width: 18,
    height: 18,
  },
  {
    href: "/",
    src: "/icons/generic_web_icons/youtube.svg",
    alt: "youtube",
    width: 20,
    height: 20,
  },
];

const menuLinks = [
  { href: "/", text: "Home" },
  { href: "/about", text: "About" },
  { href: "/", text: "Shop" },
  { href: "/", text: "Blog" },
  { href: "/", text: "Reviews" },
  { href: "/", text: "Contact Support" },
  { href: "/", text: "Secure Payment" },
  { href: "/terms-of-service", text: "Terms of Service" },
  { href: "/privacy-policy", text: "Privacy Policy" },
  { href: "/user-policy", text: "User Policy" },
  { href: "/cookie-policy", text: "Cookie Policy" },
  { href: "/shipping-return-policy", text: "Shipping & Return Policy" },
  { href: "/cancel-refund-policy", text: "Cancellation & Refund Policy" },
  { href: "/disclaimer-copyright-policy", text: "Disclaimer & Copyright policy" },
];

const contactInfo = [
  {
    icon: "fa-regular fa-clock",
    text: "Monday - Saturday : 10:00 - 19:30",
    iconClass: "transform -rotate-90",
  },
  {
    src: "/icons/generic_web_icons/email.svg",
    text: "hellonutmeals@gmail.com",
    width: 30,
    height: 30,
  },
  {
    src: "/icons/generic_web_icons/whatsapp.svg",
    text: "+91 992 44 55 776",
    width: 30,
    height: 30,
  },
  {
    src: "/icons/generic_web_icons/location.svg",
    text: "34, GF, Satyam Mall, Opp Saman complex, Nr Mansi Cross Roads, Gujarat 380015",
    width: 30,
    height: 30,
  },
];

const Footer = () => {
  const path = usePathname();
  const isAboutOrBlog = ["/about", "/blog/2"].includes(path);

  return (
    <>
      {isAboutOrBlog && (
        <div className="w-full grid grid-cols-1 lg:grid-cols-4 gap-10 bg-[#26313c] text-white lg:px-32 md:px-24 px-8 py-14 text-[13px] tracking-wider font-extralight">
          <div className="social-section col-span-1 leading-5">
            <p>
              Our desire to change the world is derived from our impulse to
              introduce FOOD DIVERSITY to every person based on CULTURE, EARNING
              and CELEBRATION!
            </p>
            <div className="mt-5 flex flex-wrap justify-start items-center text-center gap-2 -ml-2.5 max-w-80 my-2">
              {socialLinks.map(({ href, src, alt, width, height }) => (
                <Link key={alt} href={href} className={`link-hover`}>
                  <Image src={src} width={width} height={height} alt={alt} />
                </Link>
              ))}
            </div>
          </div>
          <div className="menu-section col-span-2 !w-full gap-10 flex items-start lg:justify-center capitalize">
            <div className="flex flex-col gap-2">
              {menuLinks.slice(0, 7).map(({ href, text }) => (
                <Link key={text} href={href} className="menu-hover">
                  {text}
                </Link>
              ))}
            </div>
            <div className="flex flex-col gap-2">
              {menuLinks.slice(7).map(({ href, text }) => (
                <Link key={text} href={href} className="menu-hover">
                  {text}
                </Link>
              ))}
            </div>
          </div>
          <div className="min-w-[280px] col-span-1 flex items-start justify-start flex-col gap-2">
            {contactInfo.map(
              ({ icon, src, text, width, height, iconClass }, index) => (
                <div key={index} className="flex gap-3.5 items-center">
                  {icon ? (
                    <i
                      className={`${icon} ${iconClass} p-1.5 text-lg duration-200 hover:bg-[#F8A531] rounded-md`}
                    ></i>
                  ) : (
                    <Image
                      src={src}
                      width={width}
                      height={height}
                      alt={text}
                      className="duration-300 hover:bg-[#F8A531] rounded-md p-1"
                    />
                  )}
                  <p>{text}</p>
                </div>
              )
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Footer;
