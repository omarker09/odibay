import React from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
function CatIcon(props) {
  const { theme } = useTheme();
  return (
    <div
      className={
        theme !== "dark"
          ? " flex items-center  cart-light-box p-2 rounded-md cursor-pointer duration-300 hover:opacity-70 text-black w-full h-auto justify-center "
          : " flex items-center duration-300 hover:opacity-70 cursor-pointer rounded-md text-white p-2 w-full h-auto cart-box justify-center "
      }
    >
      <div className=" flex  flex-col justify-center  items-center">
        <Link
          href={props.path}
          className={
            theme !== "dark"
              ? " text-black font-medium"
              : " text-white font-medium"
          }
        >
          {props.title}
        </Link>
        <span
          className={
            theme !== "dark"
              ? " text-black font-medium text-sm"
              : " text-white font-medium text-sm"
          }
        >
          {props.smtitle}
        </span>
      </div>
    </div>
  );
}

export default CatIcon;
