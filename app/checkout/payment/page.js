"use client";

import React, { useState, useEffect } from "react";
import Divider from "@mui/material/Divider";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Footer from "@/components/footer";
import LockIcon from "@mui/icons-material/Lock";
import { useSelector, useDispatch } from "react-redux";
import { OnRefresh, removeFromStorage } from "@/app/redux/slices/cartSlice";
import { useTheme } from "next-themes";
import paypalLogo from "../../../public/imgs/paypal.svg";
import visLogo from "../../../public/imgs/visa.svg";
import mastercardLogo from "../../../public/imgs/mastercard.svg";
import amexLogo from "../../../public/imgs/american.svg";
import gpayLogo from "../../../public/imgs/googlepay.svg";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import "../../globals.css";
import axios from "axios";
import Modal from "@mui/material/Modal";
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import Button from '@mui/material/Button';
// Material UI

import List from "@mui/material/List";
import Collapse from "@mui/material/Collapse";

export default function Cart() {
  const [open, setOpen] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);
  const [isError, setIsError] = React.useState(false);
  const [isCancel, setIsCancel] = React.useState(false);
  const [isApproved, setIsApproved] = useState(false);
  const [key, setKey] = useState("");
  const [data, setData] = useState([]);
  const selectCart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const { theme, setTheme } = useTheme();
  const handleClick = () => {
    setOpen(!open);
    setOpen2(false);
  };
  const handleClick2 = () => {
    setOpen2(!open2);
    setOpen(false);
  };
  const [openBackdrop, setOpenBackDrop] = React.useState(false);
  const handleCloseBackdrop = () => {
    setOpenBackDrop(false);
  };
  const handleOpenBackdrop = () => {
    setOpenBackDrop(true);
  };
  const createOrder = async (data, actions) => {
    try {
      const cart_init = [];
      for (let i = 0; i < selectCart.length; i++) {
        const cart_load = {
          product_token: selectCart[i].product_token,
        };
        cart_init.push(cart_load); // Push each modified item to the cart array
      }
      const response = await fetch(
        "http://localhost:3002/process/paypal/api/orders",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            cart: cart_init,
          }),
        }
      );
      const orderData = await response.json();
      console.log(orderData.id);
      if (orderData.id) {
        return orderData.id;
      } else {
        const errorDetail = orderData?.details?.[0];
        const errorMessage = errorDetail
          ? `${errorDetail.issue} ${errorDetail.description} (${orderData.debug_id})`
          : JSON.stringify(orderData);
        throw new Error(errorMessage);
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  const totalPrice = selectCart.reduce((acc, current) => {
    return (acc += current.price);
  }, 0);
  const initialOptions = {
    currency: "USD",
    intent: "capture",
    clientId:
      "AekJv-ARPKH-LoicG-ybAlfu2S1o6yZKKdK9rucpOsD1e11LDpt8Acn-eiXFuEgZDLp1D0DwHnVezb11",
  };
  useEffect(() => {
    dispatch(OnRefresh());
    /*
        const fetchData = async () => {
      try {
        const gettingLocal = localStorage?.getItem("cartSystem");
        const cartParse = JSON.parse(gettingLocal);
        if (cartParse !== undefined) {
          setCartData(cartParse);
        }
      } catch (error) {
        console.log("Error parsing:", error);
      }
    };
  
    fetchData();
    */
  }, []);

  return (
    <div className=" flex w-full flex-col justify-between h-auto">
      <Navbar />
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={openBackdrop}
        onClick={handleCloseBackdrop}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      <div
        className={
          theme !== "dark"
            ? " duration-300 bg-gray-100 w-full h-auto  px-2 sm:px-10 md:px-16 lg:px-20 gap-4 flex-col  flex py-10 items-center justify-center"
            : "duration-300 cart-parent w-full h-auto  px-2 sm:px-10 md:px-16 lg:px-20 gap-4 flex-col  flex py-10 items-center justify-center"
        }
      >
        <div className=" w-full flex flex-col gap-2">
          <h1
            className={
              theme !== "dark" ? " text-black text-2xl" : " text-white text-2xl"
            }
          >
            <LockIcon /> SECURE PAYMENT
          </h1>
          <div className="">
            {isCancel === true ? (
              <h1 className=" text-white w-auto p-2  bg-red-500 rounded-md">
                YOUR Payment has been declined
              </h1>
            ) : (
              <h1 className=" text-white w-auto p-2  bg-green-500 rounded-md">
                YOUR PAYMENT IS ENCRYPTED AND SAFE
              </h1>
            )}
          </div>
        </div>
        <div className=" w-full gap-10 flex flex-col lg:flex-row ">
          <div className=" w-full gap-4 flex flex-col">
            <div className=" w-full flex gap-2 flex-col">
              <List
                sx={{ width: "100%" }}
                component="nav"
                aria-labelledby="nested-list-subheader"
                className=" cart-box p-0 rounded-md"
              >
                <div
                  onClick={handleClick}
                  className={
                    theme !== "dark"
                      ? " w-full p-3 pr-6 flex items-center gap-3 bg-white box-shadow justify-center rounded-md cursor-pointer"
                      : " w-full p-3 pr-6 flex items-center gap-3  cart-box box-shadow justify-center rounded-md cursor-pointer"
                  }
                >
                  <div className=" w-full flex items-center justify-between px-4 rounded-md">
                    <div className=" flex items-center gap-3">
                      <div
                        className={
                          open
                            ? " p-2 border border-white bg-orange-500 rounded-full flex items-center justify-center"
                            : " p-2 border border-white  rounded-full flex items-center justify-center"
                        }
                      ></div>
                      <h1 className=" text-white font-bold text-lg">Paypal</h1>
                    </div>
                    <div className=" flex items-center gap-3">
                      <Image src={paypalLogo} height={70} width={70} />
                    </div>
                  </div>
                </div>
                <Collapse in={open} timeout="auto" unmountOnExit>
                  <div
                    onClick={handleClick}
                    className={
                      theme !== "dark"
                        ? " w-full p-3 pr-6 flex items-center gap-3 bg-white  justify-center rounded-md cursor-pointer"
                        : " w-full p-3 pr-6 flex items-center gap-3 cart-box justify-center rounded-md cursor-pointer"
                    }
                  >
                    <div className=" w-full flex items-center justify-between px-4 rounded-md">
                      <div className=" flex items-center gap-3">
                        <h1 className=" text-gray-400 ">
                          Click the button to be redirected to PayPal and
                          complete your payment securely
                        </h1>
                      </div>
                      <div className=" ">
                        <PayPalScriptProvider options={initialOptions}>
                          <PayPalButtons
                            style={{
                              color: "gold",
                              label: "pay",
                              layout: "horizontal",
                            }}
                            createOrder={createOrder}
                            onCancel={() => {
                              setIsCancel(true);
                            }}
                            onApprove={async (data) => {
                              try {
                                handleOpenBackdrop()
                                const cart_init = [];
                                for (let i = 0; i < selectCart.length; i++) {
                                  const cart_load = {
                                    product_token: selectCart[i].product_token,
                                  };
                                  cart_init.push(cart_load); // Push each modified item to the cart array
                                }
                                const cart = cart_init;
                                const payload = {
                                  cart: cart,
                                  orderID: data.orderID,
                                };
                                const bearerToken =
                                  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im9tYXJrZXJqZ0BnbWFpbC5jb20iLCJwYXNzd29yZCI6Im9tYXJrZXIwOSIsInVzZXJfaWQiOjEwMDMsInVzZXJuYW1lIjoib21hcmtlcjA5IiwiaWF0IjoxNzExMzA2MzA2LCJleHAiOjE3MTM4OTgzMDZ9.o1_qGOs-Iit5jrtLqyeLnQdeDHL9Vme4qvonAkTdOtQ";
                                const config = {
                                  headers: {
                                    "Content-Type": "application/json", // Setting the content type to JSON
                                    Authorization: `Bearer ${bearerToken}`, // Including an Authorization header with a Bearer token
                                  },
                                };
                                axios
                                  .post(
                                    "http://localhost:3002/process/paypal/api/orders/capture",
                                    payload,
                                    config
                                  )
                                  .then((resp) => {
                                    handleCloseBackdrop();
                                    const response = resp.data.rest;
                                    console.log(response);
                                    setData(response);
                                    setIsApproved(true);
                                    setIsError(false);
                                    dispatch(removeFromStorage)
                                    dispatch(OnRefresh)
                                  })
                                  .catch((err) => {
                                    console.log(err);
                                    setIsError(true);
                                    setIsLoading(false);
                                  });
                              } catch {
                                console.log("error payment");
                              }
                            }}
                          />
                        </PayPalScriptProvider>
                      </div>
                    </div>
                  </div>
                </Collapse>
              </List>

              <List
                sx={{ width: "100%" }}
                component="nav"
                aria-labelledby="nested-list-subheader"
                className=" cart-box p-0 rounded-md"
              >
                <div
                  onClick={handleClick2}
                  className={
                    theme !== "dark"
                      ? " w-full p-3 pr-6 flex items-center gap-3 bg-white box-shadow justify-center rounded-md cursor-pointer"
                      : " w-full p-3 pr-6 flex items-center gap-3  cart-box box-shadow justify-center rounded-md cursor-pointer"
                  }
                >
                  <div className=" w-full flex items-center justify-between px-4 rounded-md">
                    <div className=" flex items-center gap-3">
                      <div
                        className={
                          open2
                            ? " p-2 border border-white bg-orange-500 rounded-full flex items-center justify-center"
                            : " p-2 border border-white  rounded-full flex items-center justify-center"
                        }
                      ></div>
                      <h1 className=" text-white font-bold text-lg">
                        Credit & Debit Card
                      </h1>
                    </div>
                    <div className="flex items-center gap-3">
                      <Image src={visLogo} height={70} width={70} />
                      <Image src={amexLogo} height={70} width={70} />
                      <Image src={mastercardLogo} height={70} width={70} />
                    </div>
                  </div>
                </div>
                <Collapse in={open2} timeout="auto" unmountOnExit>
                  <div
                    onClick={handleClick2}
                    className={
                      theme !== "dark"
                        ? " w-full p-3 pr-6 flex items-center gap-3 bg-white  justify-center rounded-md cursor-pointer"
                        : " w-full p-3 pr-6 flex items-center gap-3  cart-box justify-center rounded-md cursor-pointer"
                    }
                  >
                    <div className=" w-full flex items-center justify-between px-4 rounded-md">
                      <div className=" flex items-center gap-3">
                        <h1 className=" text-gray-400 ">Not Availble Now !!</h1>
                      </div>
                    </div>
                  </div>
                </Collapse>
              </List>
            </div>
          </div>

          <div
            className={
              theme !== "dark"
                ? " bg-white box-shadow w-full lg:w-96 rounded-lg py-5 px-5 gap-4 justify-between flex flex-col"
                : " justify-between cart-box box-shadow w-full lg:w-96 rounded-lg py-5 px-5 gap-4 flex flex-col"
            }
          >
            <div>
              <h1
                className={
                  theme !== "dark"
                    ? " text-xl text-black"
                    : " text-xl text-white"
                }
              >
                Order Summary
              </h1>
            </div>
            {selectCart.map((el) => {
              return (
                <div key={el.id} className=" flex items-center justify-between">
                  <h1 className=" text-x text-gray-400">{el.title}</h1>
                  <h1 className=" text-x  text-gray-400">{el.price}$</h1>
                </div>
              );
            })}
            <Divider className=" bg-gray-400" />
            <div className=" flex items-center justify-between">
              <h1
                className={
                  theme !== "dark"
                    ? " text-2xl text-black font-semibold"
                    : " text-2xl text-white font-semibold"
                }
              >
                Total :{" "}
              </h1>
              <h1 className=" text-2xl orange-text-colo font-semibold">
                {totalPrice}$
              </h1>
            </div>
            <div>
              <h1 className=" text-x text-gray-400">
                Prices displayed in US Dollar
              </h1>
            </div>
          </div>
        </div>
        <Modal
          open={isApproved}
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
                          ? "text-white bg-green-600 p-2 rounded-md text-xl font-bold"
                          : "text-black bg-green-600 p-2 rounded-md text-xl font-bold"
                      }
                    >
                      Your Product Key
                    </h1>
                    <span
                      onClick={() => {
                        setIsApproved(false);
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
                    className={
                      theme === "dark" ? "text-gray-400" : "text-gray-400"
                    }
                  >
                    We have sent your Product Key to your email address
                  </p>
                </div>
              </div>
              <Divider
                style={{ height: 1 }}
                className={
                  theme === "dark"
                    ? " w-full bg-gray-700"
                    : " w-full bg-gray-300"
                }
              />
              <div>
                <div className="flex flex-col gap-3">
                  {data.map((el, index) => {
                    return (
                      <div className=" gap-3 flex flex-col">
                        <span
                          className={
                            theme === "dark"
                              ? "text-white font-extrabold text-sm"
                              : "text-black font-extrabold text-sm"
                          }
                        >
                          Product name : {el.name}
                        </span>
                        <h1
                          className={
                            theme === "dark"
                              ? "text-white font-extrabold text-sm"
                              : "text-black font-extrabold text-sm"
                          }
                        >
                          KEY : {el.key}
                        </h1>
                        <Divider
                          style={{ height: 1 }}
                          className=" w-full bg-slate-600"
                        />
                      </div>
                    );
                  })}
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
                    {key}
                  </h1>
                </div>
              </div>
              <div className="flex items-center gap-4 justify-between w-full"></div>
            </div>
          </div>
        </Modal>
      </div>
      <Footer />
    </div>
  );
}
