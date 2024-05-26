"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const SubNavMenu = ({ data }) => {
  const path = usePathname();
  const router = useRouter();
  const [menu, setmenu] = useState(data);

  useEffect(() => {
    setmenu(menu);
  }, [path]);

  const listview = () => {
    router.push(path);
  };

  const columnview = () => {
    router.push(path + "?q=column");
  };

  return (
    <>
      {path != "/shop" && path.includes("shop") && (
        <div className="bg-white bg-opacity-80 left-div-navbar right-div-navbar shadow-md">
          <div className="flex justify-start items-center gap-[40px] text-[16px]">
            {menu?.map((val, i) => {
              if (val.href === "/shop/category" && path === "/shop/category") {
                return null;
              }
              if (val.href === "/shop/category" &&  /^\/shop\/combodeals\/.*$/.test(path)) {
                return null;
              }
              return (
                <Link
                  key={i}
                  href={val.href}
                  className={`px-3 text-sm rounded-[4px]`}
                >
                  {val.name}
                </Link>
              );
            })}
            <p className="ml-auto">
              <img
                src="/icons/filter.svg"
                className="duration-300 text-xl hover:bg-[#faa61a] p-1.5 cursor-pointer rounded-md"
                alt="filter"
              />
            </p>
          </div>
        </div>
      )}
      {path == "/blog" && (
        <div className="bg-white bg-opacity-80 left-div-navbar right-div-navbar shadow-md pr-14">
          <div className="flex justify-end items-center gap-1 text-[16px]">
            <button
              className="text-black !fill-black p-1.5 rounded-md"
              onClick={listview}
            >
              <img
                src="/icons/list-view.svg"
                alt="nutmeals"
                className="w-4 !fill-white"
              />
            </button>
            <button
              className="text-black !fill-black p-1.5 rounded-md"
              onClick={columnview}
            >
              <img
                src="/icons/column-view.svg"
                alt="nutmeals"
                className="w-4 !fill-white"
              />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default SubNavMenu;
