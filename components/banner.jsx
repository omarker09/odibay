"use client";

// main
import React from "react";
import Myswipper from "./swipper";


function Banner() {

  return (
    <div className="h-auto flex md:hidden w-full sm:px-10 relative px-2 py-5 md:px-10 md:py-5">
      <Myswipper />
    </div>
  );
}

export default Banner;
