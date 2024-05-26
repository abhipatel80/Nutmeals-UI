"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

const Navbar = () => {
  const [hoveredIcon, setHoveredIcon] = useState(null);
  const router = usePathname();

  const handleIconHover = (index) => {
    setHoveredIcon(index);
  };

  const handleIconLeave = () => {
    setHoveredIcon(null);
  };

  const icons = [
    {
      src: "add to cart.svg",
      whiteSrc: "white_add_to_cart.svg",
      link: "/cart",
      className: `${router.includes("/cart") ? "icon-active" : ""}`,
    },
    {
      src: "black_account_profile.svg",
      whiteSrc: "white_account_profile.svg",
      link: "/auth",
      className: `${router == "/auth" ? "icon-active" : ""}`,
    },
    {
      src: "search.svg",
      whiteSrc: "white_search.svg",
      link: "/search",
      className: `${router == "/search" ? "icon-active" : ""}`,
    },
    {
      src: "contact _ support.svg",
      whiteSrc: "white_contact_support.svg",
      link: "/contact",
      className: `${
        router == "/contact"
          ? "!bg-[#faa61a] !text-white !duration-300 !rounded-md !py-2 !pl-3 !pr-2"
          : "!rounded-md !py-2 !pl-3 !pr-2"
      }`,
    },
  ];

  return (
    <nav className="max-h-[54px] z-[999] uppercase text-[#707070] flex w-full sm:justify-around items-center p-2">
      <Link href="/">
        <Image
          src="/icons/Nutmeals Logo ver2.svg"
          alt="Logo"
          width={150}
          height={150}
        />
      </Link>
      <div className="navbar-center-menu gap-0 sm:gap-4 sm:flex hidden sm:text-[16px] !text-[14px]">
        <Link
          href="/about"
          className={`hover:bg-[#faa61a] hover:text-white duration-300 rounded-md py-1 sm:px-4 !px-3 ${
            router == "/about" ? "active" : ""
          }`}
        >
          About
        </Link>
        <Link
          href="/shop"
          className={`hover:bg-[#faa61a] hover:text-white duration-300 rounded-md py-1 sm:px-4 !px-3 ${
            router.includes("/shop") ? "active" : ""
          }`}
        >
          Shop
        </Link>
        <Link
          href="/blog"
          className={`hover:bg-[#faa61a] hover:text-white duration-300 rounded-md py-1 sm:px-4 !px-3 ${
            router.includes("/blog") ? "active" : ""
          }`}
        >
          Blog
        </Link>
      </div>
      {icons.map((icon, index) => {
        if (icon.link != "/contact") {
          return null;
        }
        return (
          <Link
            key={index}
            href={icon.link}
            onMouseEnter={() => handleIconHover(index)}
            onMouseLeave={handleIconLeave}
            className={`sm:hidden block rounded-md py-2 px-2.5 duration-300 ml-auto ${
              hoveredIcon === index || router === icon.link
                ? "bg-[#faa61a] text-white"
                : ""
            } ${icon.className}`}
          >
            <Image
              src={`/icons/generic_web_icons/${
                hoveredIcon === index || router === icon.link
                  ? icon.whiteSrc
                  : icon.src
              }`}
              width={index >= icons.length - 3 ? 18 : 17}
              height={index >= icons.length - 3 ? 18 : 17}
              alt={icon.src.split(".")[0]}
              className="duration-300"
            />
          </Link>
        );
      })}
      <div className="navbar-right-menu gap-0 sm:gap-4 sm:flex items-center justify-center hidden">
        {icons.map((icon, index) => (
          <Link
            key={index}
            href={icon.link}
            onMouseEnter={() => handleIconHover(index)}
            onMouseLeave={handleIconLeave}
            className={`rounded-md py-2 px-2.5 duration-300 ${
              hoveredIcon === index || router === icon.link
                ? "bg-[#faa61a] text-white"
                : ""
            } ${icon.className}`}
          >
            <Image
              src={`/icons/generic_web_icons/${
                hoveredIcon === index || router === icon.link
                  ? icon.whiteSrc
                  : icon.src
              }`}
              width={index >= icons.length - 3 ? 18 : 17}
              height={index >= icons.length - 3 ? 18 : 17}
              alt={icon.src.split(".")[0]}
              className="duration-300"
            />
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
