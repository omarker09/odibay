"use client";

import React, { useState, useEffect } from "react";
import Divider from "@mui/material/Divider";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Footer from "@/components/footer";
import LockIcon from "@mui/icons-material/Lock";
import { useSelector, useDispatch } from "react-redux";
import { OnRefresh } from "@/app/redux/slices/cartSlice";
import { useTheme } from "next-themes";
import paypalLogo from "../../../public/imgs/paypal.svg";
import visLogo from "../../../public/imgs/visa.svg";
import mastercardLogo from "../../../public/imgs/mastercard.svg";
import amexLogo from "../../../public/imgs/american.svg";
import gpayLogo from "../../../public/imgs/googlepay.svg";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import "../../globals.css";
import axios from "axios";

// Material UI

import List from "@mui/material/List";
import Collapse from "@mui/material/Collapse";

export default function Cart() {
  const [open, setOpen] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);
  const [cartData,setCartData] = useState([]);
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
  const totalPrice = cartData.reduce((acc, current) => {
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
            <h1 className=" text-white w-auto p-2  bg-green-500 rounded-md">
              YOUR PAYMENT IS ENCRYPTED AND SAFE
            </h1>
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
                              alert("Your Order has Been removed");
                            }}
                            onApprove={async (data) => {
                              try {
                                const cart_init = [];
                                for (let i = 0; i < selectCart.length; i++) {
                                  const cart_load = {
                                    product_token: selectCart[i].product_token,
                                  };
                                  cart_init.push(cart_load); // Push each modified item to the cart array
                                }
                                const cart = cart_init
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
                                axios.post(
                                    "http://localhost:3002/process/paypal/api/orders/capture",
                                    payload,
                                    config
                                  )
                                  .then((resp) => {
                                    console.log(resp);
                                    setIsApproved(true);
                                    setProducts(resp.data.rest);
                                    setIsLoading(false);
                                    setIsError(false);
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
      </div>
      <Footer />
    </div>
  );
}
