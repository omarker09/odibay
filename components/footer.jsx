"use client";

// Main
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";
import "../app/globals.css";
import { langCurrencies, langBtn } from "@/app/mainComponent/langCurrencies";
import GetInAndroid from "../public/collectble/get-in-android.svg";
import GetInIOS from "../public/collectble/get-in-ios.svg";
import dzFlag from '../public/flags/DZ.avif'
import VisaMasterCardLogo from "../public/payments-imgs/visa-mastercard-logo-png.png";
import { FaCcMastercard } from "react-icons/fa";
import { FaPaypal } from "react-icons/fa";
import { RiVisaLine } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";

// Redux

// Material UI
import Divider from "@mui/material/Divider";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

import ProjectLogo from "../public/imgs/Odibay.png";
import ProjectLogoBlack from "../public/imgs/Odibay-black.png";

function Footer() {
  const { theme, setTheme } = useTheme();
  const [open3, setOpen3] = React.useState(false);
  const handleClose3 = () => setOpen3(false);

  return (
    <div
      style={{ borderTop: "soild 2px rgb(209 213 219)" }}
      className={
        theme !== "dark"
          ? "flex flex-col duration-300  h-auto bg-white p-6  pb-0 border-t-2 border-gray-200"
          : "flex duration-300 flex-col  h-auto border-t-2 footer-dark-border-top footer-dark-bg p-6 pb-0"
      }
    >
      <div className=" w-full flex flex-col gap-4 items-start sm:items-start px-2 sm:px-10">
        <Image
          src={theme !== "dark" ? ProjectLogoBlack : ProjectLogo}
          width={150}
          height={150}
        />
        <div className="flex items-center gap-4">
          <span
            className={
              theme !== "dark"
                ? " text-black text-center text-xs sm:text-start"
                : " text-gray-400 text-center text-xs sm:text-start"
            }
          >
            Payment methods:
          </span>
          <div className="flex items-center gap-3">
            <FaPaypal
              className={
                theme === "dark" ? "text-white h-7 w-7" : "text-black h-7 w-7"
              }
            />
            <RiVisaLine
              className={
                theme === "dark" ? "text-white h-7 w-7" : "text-black h-7 w-7"
              }
            />
            <FaCcMastercard
              className={
                theme === "dark" ? "text-white h-7 w-7" : "text-black h-7 w-7"
              }
            />
          </div>
        </div>
      </div>
      <div
        className={
          theme !== "dark"
            ? " w-full grid duration-300 grid-cols-1 h-auto sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 px-2 sm:px-10 gap-3  items-start justify-center py-6 bg-white"
            : " w-full duration-300 grid grid-cols-1 h-auto sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 px-2 sm:px-10 gap-3  items-start justify-center py-6 footer-dark-bg"
        }
      >
        <div className=" flex flex-col gap-6 justify-center  h-full">
        <div className=" flex flex-col gap-5 items-start sm:items-start justify-start ">
            <h1 className={theme !== "dark" ? " text-black" : " text-white"}>
              Soulotions
            </h1>
            <div className=" flex flex-col items-start sm:items-start gap-2">
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
          <div className=" flex flex-col gap-5 items-start sm:items-start justify-start ">
            <h1 className={theme !== "dark" ? " text-black" : " text-white"}>
              Soulotions
            </h1>
            <div className=" flex flex-col items-start sm:items-start gap-2">
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
        <div className=" flex  gap-6 items-end justify-start  flex-col w-full  h-full">
        <div className=" flex flex-col gap-5 items-start sm:items-start justify-start ">
            <h1 className={theme !== "dark" ? " text-black" : " text-white"}>
              Soulotions
            </h1>
            <div className=" flex flex-col items-start sm:items-start gap-2">
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
        <div className=" flex flex-col gap-6 items-start sm:items-end justify-start  w-full  h-full">
          <div className="flex items-center gap-4">
            <FaInstagram className="text-lg h-10 cursor-pointer rounded-full w-10 p-3 bg-pink-700 duration-300 text-pink-300" />
            <FaDiscord className="text-lg h-10 cursor-pointer rounded-full w-10 p-3 bg-blue-600 duration-300 text-white" />
            <FaXTwitter className="text-lg h-10 cursor-pointer rounded-full w-10 p-3 bg-black duration-300 text-white" />
            <FaFacebook className="text-lg h-10 cursor-pointer rounded-full w-10 p-3 bg-white duration-300 text-blue-500" />
          </div>
          <div className="flex items-start gap-3">
            <div className="p-3 get-in-bg border border-gray-600 rounded-lg cursor-pointer">
              <Image src={GetInAndroid} height={100} width={100} />
            </div>
            <div className="p-3 get-in-bg rounded-lg border border-gray-600 cursor-pointer">
              <Image src={GetInIOS} height={100} width={100} />
            </div>
          </div>
        </div>
      </div>
      <div className=" w-full px-2 sm:px-10">
        <Divider
          className={
            theme !== "dark"
              ? " text-white bg-gray-300"
              : " text-white footer-dark-divider"
          }
        />
      </div>
      <div className=" w-full flex items-center flex-wrap justify-center gap-2 sm:justify-between py-5 px-2 sm:px-10">
        <p
          className={
            theme !== "dark"
              ? " text-black text-sm font-medium"
              : " text-white text-sm font-medium"
          }
        >
          Copyright © 2024 Odibay Keys - All rights reserved
        </p>
      </div>
    </div>
  );
}

export default Footer;
