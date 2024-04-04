"use client";
import React, { useEffect, useState } from "react";
import Modal from "@mui/material/Modal";

import "../globals.css";
import Divider from "@mui/material/Divider";
import { useTheme } from "next-themes";
import Select from "react-select";

export const langBtn = ({setOpen3}) => {
    return (
        <div
        onClick={() => {
          setOpen3(true);
        }}
        className={
          theme !== "dark"
            ? "cart-light-box hidden md:flex relative duration-250 h-full text-xl rounded-md text-black  px-3  cursor-pointer"
            : "cart-box hidden md:flex  relative duration-250 h-full text-xl rounded-md text-white  px-3  cursor-pointer"
        }
      >
        <span
          style={{ paddingTop: 14, paddingBottom: 14 }}
          className=" h-full flex px-1 text-xl gap-4"
        >
          <Image src={dzFlag} height={20} width={20} />
          <p className=" text-sm">DZD | English</p>
        </span>
      </div>
    )
};

export const langCurrencies = ({ open3, handleClose3, setOpen3 }) => {
  const { theme, setTheme } = useTheme();
  const [selectedOption, setSelectedOption] = useState([]);
  const [selectedOption2, setSelectedOption2] = useState([]);

  const options = [
    { value: "Algeria | DZD", label: "Algeria | DZD" },
    { value: "United States | USD", label: "United States | USD" },
    { value: "Europe | EUR", label: "Europe | EUR" },
  ];
  const langOptions = [
    { value: "العربية", label: "العربية" },
    { value: "English", label: "English" },
  ];

  const handleChange = (selectedOption) => {
    setSelectedOption(selectedOption);
    console.log(selectedOption);
  };
  const handleChange2 = (param) => {
    setSelectedOption2(param);
    console.log(selectedOption2);
  };
  return (
    <Modal
      open={open3}
      onClose={handleClose3}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <div className=" w-full h-full bg-transparent flex  items-center justify-center">
        <div
          className={
            theme === "dark"
              ? " w-96 h-auto flex flex-col gap-4 cart-parent rounded-md p-5"
              : " w-96 h-auto flex flex-col gap-4 bg-white rounded-md p-5"
          }
        >
          <div className="w-full flex items-center justify-between">
            <div className="w-full flex items-start gap-2 flex-col">
              <div className="w-full flex justify-between items-center">
                <h1
                  className={
                    theme === "dark"
                      ? "text-white text-xl font-bold"
                      : "text-black text-xl font-bold"
                  }
                >
                  Update your settings
                </h1>
                <span
                  onClick={() => {
                    setOpen3(false);
                  }}
                  className={
                    theme === "dark"
                      ? "text-white cursor-pointer"
                      : "text-black cursor-pointer"
                  }
                >
                  &#10006;
                </span>
              </div>
              <p
                className={theme === "dark" ? "text-gray-400" : "text-gray-400"}
              >
                Set your preferred region and currency
              </p>
            </div>
          </div>
          <Divider
            style={{ height: 1 }}
            className={
              theme === "dark" ? " w-full bg-gray-700" : " w-full bg-gray-300"
            }
          />
          <div>
            <div className="flex flex-col gap-3">
              <h1
                className={
                  theme === "dark"
                    ? "text-white font-extrabold text-sm"
                    : "text-black font-extrabold text-sm"
                }
              >
                COUNTRY | CURRENCY
              </h1>
              <Select
                className="cursor-pointer"
                value={selectedOption}
                onChange={handleChange}
                options={options}
              />
            </div>
          </div>
          <div>
            <div className="flex flex-col gap-3">
              <h1
                className={
                  theme === "dark"
                    ? "text-white font-extrabold text-sm"
                    : "text-black font-extrabold text-sm"
                }
              >
                Language
              </h1>
              <Select
                className="cursor-pointer"
                options={langOptions}
                onChange={handleChange2}
                value={selectedOption2}
              />
            </div>
          </div>
          <div className="flex items-center gap-4 justify-between w-full">
            <button
              onClick={() => {
                setOpen3(false);
                window.location.reload();
              }}
              className=" p-3 orange-background text-base font-bold w-full rounded-md"
            >
              Save
            </button>
            <button
              onClick={() => {
                setOpen3(false);
              }}
              className={
                theme === "dark"
                  ? " p-3 cart-box w-full text-white text-base font-bold rounded-md"
                  : " p-3 cart-light-box w-full text-black text-base font-bold rounded-md"
              }
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
};

