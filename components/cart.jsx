"use client";

// main
import React from "react";
import Bottomtabs from "./bottomtabs";
import Navbar from "./Navbar";
import "react-multi-carousel/lib/styles.css";
import Footer from "./footer";

function Cart() {
  return (
    <div className="flex flex-col justify-between h-auto">
      <Navbar />
      <div className=" flex flex-col justify-between relative h-96    bg-black "></div>
      <Footer />
      <Bottomtabs />
    </div>
  );
}

export default Cart;
