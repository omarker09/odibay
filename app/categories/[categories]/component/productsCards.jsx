import React from "react";
import Card from "./card";
import darksouls from "../../../../public/imgs/dark souls.avif";
import elden from "../../../../public/imgs/elden-ring.avif";
import parfic from "../../../../public/imgs/parfic.avif";
import resd4 from "../../../../public/imgs/resd-4.avif";
import batman from "../../../../public/imgs/batman.avif";
import legopirate from "../../../../public/imgs/lego-pirates-of-carribean.avif";
import { useTheme } from "next-themes";
import Link from "next/link";

function ProductsCards({ title, product_category }) {
  const { theme, setTheme } = useTheme();
  return (
    <div
      className={
        theme === "dark"
          ? " w-full py-5  flex flex-col gap-3 px-2 sm:px-10 md:px-16 lg:px-20"
          : " w-full py-5 bg-white flex flex-col gap-3 px-2 sm:px-10 md:px-16 lg:px-20"
      }
    >
      <div className=" w-full flex flex-col  py-2 gap-2 justify-between items-start">
        <div className=" w-full flex items-center justify-between">
          <h1
            className={
              theme === "dark"
                ? " text-xl font-extrabold text-white"
                : " text-xl font-extrabold text-black"
            }
          >
            {product_category}
          </h1>
          <Link
            className={
              theme !== "dark"
                ? " cart-light-box py-1 px-2 rounded text-xs text-black "
                : " cart-box py-1 px-2 rounded text-xs  text-white "
            }
            href={"/"}
          >
            Discover all
          </Link>
        </div>
        <div className="flex flex-col gap-0 justify-start">
          <p className={theme !== "dark" ? "text-gray-500" : "text-gray-200"}>
            {title}
          </p>
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-2 extralarge md:gap-8 w-full">
        <Card image={darksouls} title={"dark souls 2"} />
        <Card image={elden} title={"Elden Ring"} />
        <Card image={parfic} title={"dark souls 2"} />
        <Card image={batman} title={"BATMAN"} />
        <Card image={legopirate} title={"lEGO Pirates"} />
        <Card image={resd4} title={"Resident evil 4"} />
      </div>
    </div>
  );
}

export default ProductsCards;
