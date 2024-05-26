"use client";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

const MobileMenu = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isSearchPopupOpen, setIsSearchPopupOpen] = useState(false);
  const [isfullWidthMenu, setIsFullWidthMenu] = useState(false);

  const menuRef = useRef(null);
  const searchRef = useRef(null);
  const containerRef = useRef(null);

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
    if (isSearchPopupOpen) {
      setIsSearchPopupOpen(false);
    }
    setIsFullWidthMenu(true);
  };

  const toggleSearchPopup = (e) => {
    e.preventDefault();
    setIsSearchPopupOpen(!isSearchPopupOpen);
    if (isPopupOpen) {
      setIsPopupOpen(false);
    }
  };

  const handleMenuItemClick = () => {
    setIsPopupOpen(false);
    setIsSearchPopupOpen(false);
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        searchRef.current &&
        !searchRef.current.contains(event.target)
      ) {
        setIsPopupOpen(false);
        setIsSearchPopupOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuRef, searchRef]);

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target)
      ) {
        setIsFullWidthMenu(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [containerRef]);

  return (
    <div
      className={`fixed bottom-0 mx-3 my-2 mobile-sticky-bar rounded-full bg-white z-10 text-[#707070] flex items-center shadow-lg ${
        isfullWidthMenu ? "full-width py-3 px-4" : "p-4"
      }`}
      ref={containerRef}
    >
      <div onClick={togglePopup}>
        <img
          src="/icons/menu.svg"
          alt="nutmeals"
          className="w-5 cursor-pointer"
        />
      </div>
      <Link href="/cart" onClick={handleMenuItemClick}>
        <img
          src="/icons/generic_web_icons/add to cart.svg"
          alt="nutmeals"
          className="w-[18px]"
        />
      </Link>
      <Link href="/" onClick={toggleSearchPopup}>
        <img
          src="/icons/generic_web_icons/search.svg"
          alt="nutmeals"
          className="w-6"
        />
      </Link>
      <Link href="/" onClick={handleMenuItemClick}>
        <i className="fa-regular fa-heart pt-[4px] text-[22px]"></i>
      </Link>
      <Link href="/auth" onClick={handleMenuItemClick}>
        <img
          src="/icons/generic_web_icons/black_account_profile.svg"
          alt="nutmeals"
          className="w-5"
        />
      </Link>
      {isPopupOpen && (
        <div
          className="fixed bottom-[58px] left-0 right-0 bg-[#f5f5f5] p-4 transition-transform transform translate-y-0"
          ref={menuRef}
        >
          <ul className="text-center">
            <li className="p-2" onClick={handleMenuItemClick}>
              <Link href="/about">About</Link>
            </li>
            <li className="p-2" onClick={handleMenuItemClick}>
              <Link href="/shop">Shop</Link>
            </li>
            <li className="p-2" onClick={handleMenuItemClick}>
              <Link href="/blog">Blog</Link>
            </li>
          </ul>
        </div>
      )}

      {isSearchPopupOpen && (
        <div
          className="fixed bottom-[58px] left-0 right-0 bg-[#f5f5f5] p-4 transition-transform transform translate-y-0"
          ref={searchRef}
        >
          <ul className="flex items-center justify-between gap-5 w-full">
            <input
              type="text"
              className="custom-input !w-full"
              placeholder="Search"
            />
            <Link href="/" onClick={handleMenuItemClick}>
              <img
                src="/icons/generic_web_icons/search.svg"
                alt="nutmeals"
                className="w-7"
              />
            </Link>
            <Link href="/scan" onClick={handleMenuItemClick}>
              <img
                src="/icons/scan.svg"
                alt="nutmeals"
                className="w-7"
              />
            </Link>
          </ul>
        </div>
      )}
    </div>
  );
};

export default MobileMenu;
