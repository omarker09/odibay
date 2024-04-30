"use client";

// Main
import React from "react";
import CatIcon from "@/componnent-sm/catIcon";
import Categoryitems from "@/data/categoryitems";
import { useSelector } from "react-redux";
import { useTheme } from "next-themes";
function Fastcategory() {
  const { theme, setTheme } = useTheme();
  return (
    <div className=" w-full flex flex-col ">
      <div
        className={
          theme !== "dark"
            ? " w-full px-2 bg-white duration-300 sm:px-10 md:px-16 lg:px-20 "
            : " w-full px-2 duration-300 sm:px-10 md:px-16 lg:px-20 "
        }
      >
        <h1
          className={
            theme === "dark"
              ? " text-xl font-extrabold text-white"
              : " text-xl font-extrabold text-black"
          }
        >
             Browse Odibay
        </h1>

      </div>
      <div
        className={
          theme !== "dark"
            ? " w-full grid grid-cols-2 bg-white  sm:grid-cols-3 h-auto lg:grid-cols-4 justify-between gap-4 px-2 sm:px-10 md:px-16 lg:px-20 py-3 flex-col"
            : "flex-col w-full grid grid-cols-2 cart-parent  sm:grid-cols-3 h-auto lg:grid-cols-4 justify-between gap-4 px-2 sm:px-10 md:px-16 lg:px-20 py-3"
        }
      >
        {Categoryitems.map((e) => {
          return (
            <CatIcon
              img={e.img}
              title={e.Title}
              smtitle={e.SemiTitle}
              path={e.link}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Fastcategory;
