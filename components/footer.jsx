"use client";

// Main
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";
import "../app/globals.css";

// Redux

// Material UI
import Divider from "@mui/material/Divider";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

import ProjectLogo from "../public/imgs/Odibay.png";
import ProjectLogoBlack from "../public/imgs/Odibay-black.png";

function Footer() {
  const { theme, setTheme } = useTheme();
  return (
    <div
      style={{ borderTop: "soild 2px rgb(209 213 219)" }}
      className={
        theme !== "dark"
          ? "flex flex-col duration-300  h-auto bg-white p-6  pb-0 border-t-2 border-gray-200"
          : "flex duration-300 flex-col  h-auto border-t-2 border-transparent nav-background p-6 pb-0"
      }
    >
      <div className=" w-full flex flex-col gap-4 items-center sm:items-start px-2 sm:px-10">
        <Image
          src={theme !== "dark" ? ProjectLogoBlack : ProjectLogo}
          width={205}
          height={205}
        />

        <span
          className={
            theme !== "dark"
              ? " text-black text-center text-xs sm:text-start"
              : " text-white text-center text-xs sm:text-start"
          }
        >
          A specialized company offering digital gift cards and games, we have
          been in operation for more than 3 years. Our commitment to delivering
          the best services and products extends primarily to Algeria and the
          Arab region.
        </span>
        <div>
          <button className=" bg-green-500 w-52 justify-center p-2 flex items-center gap-2 rounded-md text-center text-white">
            <WhatsAppIcon fontSize="small" /> WhatsApp{" "}
          </button>
        </div>
      </div>
      <div
        className={
          theme !== "dark"
            ? " w-full grid duration-300 grid-cols-1 h-auto sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 px-2 sm:px-10 gap-3  items-center justify-center py-6 bg-white"
            : " w-full duration-300 grid grid-cols-1 h-auto sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 px-2 sm:px-10 gap-3  items-center justify-center py-6 nav-background"
        }
      >
        <div className=" flex flex-col gap-6 justify-center  h-full">
          <div className=" flex flex-col gap-5 items-center sm:items-start justify-start ">
            <h1 className={theme !== "dark" ? " text-black" : " text-white"}>
              Soulotions
            </h1>
            <div className=" flex flex-col items-center sm:items-start gap-2">
              <Link href={"/"} className=" no-underline text-gray-400">
                Control
              </Link>
              <Link href={"/"} className=" no-underline text-gray-400">
                Control Scalibilyty
              </Link>
              <Link href={"/"} className=" no-underline text-gray-400">
                System Managment
              </Link>
              <Link href={"/"} className=" no-underline text-gray-400">
                Digigtal Assistant Managment
              </Link>
            </div>
          </div>
        </div>
        <div className=" flex flex-col gap-6 justify-center  h-full">
          <div className=" flex flex-col gap-5 items-center sm:items-start justify-start ">
            <h1 className={theme !== "dark" ? " text-black" : " text-white"}>
              Soulotions
            </h1>
            <div className=" flex flex-col items-center sm:items-start gap-2">
              <Link href={"/"} className=" no-underline text-gray-400">
                Control
              </Link>
              <Link href={"/"} className=" no-underline text-gray-400">
                Control Scalibilyty
              </Link>
              <Link href={"/"} className=" no-underline text-gray-400">
                System Managment
              </Link>
              <Link href={"/"} className=" no-underline text-gray-400">
                Digigtal Assistant Managment
              </Link>
            </div>
          </div>
        </div>
        <div className=" flex flex-col gap-6 justify-center  h-full">
          <div className=" flex flex-col gap-5 items-center sm:items-start justify-start ">
            <h1 className={theme !== "dark" ? " text-black" : " text-white"}>
              Soulotions
            </h1>
            <div className=" flex flex-col items-center sm:items-start gap-2">
              <Link href={"/"} className=" no-underline text-gray-400">
                Control
              </Link>
              <Link href={"/"} className=" no-underline text-gray-400">
                Control Scalibilyty
              </Link>
              <Link href={"/"} className=" no-underline text-gray-400">
                System Managment
              </Link>
              <Link href={"/"} className=" no-underline text-gray-400">
                Digigtal Assistant Managment
              </Link>
            </div>
          </div>
        </div>
        <div className=" flex flex-col gap-6 justify-center  h-full">
          <div className=" flex flex-col gap-5 items-center sm:items-start justify-start ">
            <h1 className={theme !== "dark" ? " text-black" : " text-white"}>
              Soulotions
            </h1>
            <div className=" flex flex-col items-center sm:items-start gap-2">
              <Link href={"/"} className=" no-underline text-gray-400">
                Control
              </Link>
              <Link href={"/"} className=" no-underline text-gray-400">
                Control Scalibilyty
              </Link>
              <Link href={"/"} className=" no-underline text-gray-400">
                System Managment
              </Link>
              <Link href={"/"} className=" no-underline text-gray-400">
                Digigtal Assistant Managment
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className=" w-full px-2 sm:px-10">
        <Divider
          className={
            theme !== "dark"
              ? " text-white bg-gray-300"
              : " text-white bg-gray-500"
          }
        />
      </div>
      <div className=" w-full flex items-center flex-wrap justify-center gap-2 sm:justify-between py-5 px-2 sm:px-10">
        <p
          className={
            theme !== "dark" ? " text-black text-xs" : " text-white text-xs"
          }
        >
          Copyright © 2023 Gixify.com , All rights reserved
        </p>
        <div className=" flex items-center gap-2">
          <p
            className={
              theme !== "dark" ? " text-black text-xs" : " text-white text-xs"
            }
          >
            Email : omardev@gmail.com
          </p>
          <p
            className={
              theme !== "dark" ? " text-black text-xs" : " text-white text-xs"
            }
          >
            Phone : +213 792028538
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
