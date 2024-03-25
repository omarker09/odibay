import React from "react";
import Image from "next/image";

import "../app/globals.css";
function Smallgroup(props) {
  return (
    <div className=" boxshadow duration-200  border border-1 border-gray-300    w-auto   flex lg:flex-nowrap flex-wrap  rounded ">
      <Image
        height={10}
        width={10}
        layout="responsive"
        src={props.img}
        style={{ borderTopLeftRadius: 4, borderBottomLeftRadius: 4 }}
        className="  select-none nodrag object-cover  "
      />
      <div
        style={{ borderTopRightRadius: 4, borderBottomRightRadius: 4 }}
        className=" bg-slate-100 nav-background-text flex flex-col items-start justify-between w-full   border-t border-t-gray-300  py-3  md:py-7 px-4  text-lg font-bold "
      >
        <div className=" w-full flex  items-start">
          <span className=" text-gray-500 text-sm">
            Steam Gift Card 10$ Global Edition
          </span>
        </div>
        <div className=" flex w-40  gap-1 flex-col items-start justify-start">
          <span className=" text-black text-sm md:text-lg">$11.80</span>
          <span className=" text-gray-500 text-sm line-through">$15.80</span>
          <button className=" bg-red-200 text-red-700 text-xs rounded-md p-1 border border-1 border-red-700">
            66%
          </button>
        </div>
      </div>
    </div>
  );
}

export default Smallgroup;
