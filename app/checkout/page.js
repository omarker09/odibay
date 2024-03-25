"use client";
import React, { useState, useEffect } from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import axios from "axios";
import LinearProgress from "@mui/material/LinearProgress";

const PayPalButton = () => {
  const [isCancel, setIsCancel] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isApproved, setIsApproved] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const createOrder = async (data, actions) => {
    try {
      const response = await fetch(
        "http://localhost:3002/process/paypal/api/orders",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            cart: [
              {
                product_token:
                  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbmNyeXB0ZWRQcm9kdWN0TmFtZSI6IlUyRnNkR1ZrWDErY2FJWE4vcnRINEJ5N1dnZEszRFYreGlYb2tvckwxc2c9IiwiZW5jcnlwdGVkUHJvZHVjdENhdGVnb3J5IjoiVTJGc2RHVmtYMTlDSHN3VzRMYTFSUkZnRm5CUy9ia3FlYngwUmkvelBIMD0iLCJlbmNyeXB0ZWRQcmljZSI6IlUyRnNkR1ZrWDEvczB5aXRLWTFYY0JFM3I1QUpxK0thd0JIUU5kYllqeDA9IiwiZW5jcnlwdGVkUHJvZHVjdEN1cnJlbmN5IjoiVTJGc2RHVmtYMTkrWU9qL2VaSXJHcXVXL0tzd2RhQ2QvTlMvWmQzTlEzND0iLCJpYXQiOjE3MTA4MTM2ODR9.8kvfkB00e0bdigGko_mptjfXGs7Tdx67Ho8WHTB-s2I",
              },
            ],
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

  const onApproveFun = async (data) => {};
  const initialOptions = {
    currency: "USD",
    intent: "capture",
    clientId:
      "AekJv-ARPKH-LoicG-ybAlfu2S1o6yZKKdK9rucpOsD1e11LDpt8Acn-eiXFuEgZDLp1D0DwHnVezb11",
  };
  return (
    <div className=" h-screen w-full flex items-center flex-col justify-start gap-4">
      <div className={isLoading ? " w-full" : "hidden"}>
        <LinearProgress />
      </div>
      <div
        className={
          isApproved
            ? " w-full  bg-green-600 flex items-center justify-center p-4"
            : "hidden"
        }
      >
        <h1 className=" text-white text-xl text-center f">
          you have seccesfully bought your product
        </h1>
      </div>
      <div
        className={
          isCancel
            ? " w-full  bg-red-600 flex items-center justify-center p-4"
            : "hidden"
        }
      >
        <h1 className=" text-white text-xl text-center f">
          your order has been canceld
        </h1>
      </div>
      <div
        className={
          isError
            ? " w-full  bg-red-600 flex items-center justify-center p-4"
            : "hidden"
        }
      >
        <h1 className=" text-white text-xl text-center f">
          your order has error something happend
        </h1>
      </div>
      <div
        className={
          isLoading
            ? " w-full bg-slate-400 flex items-center flex-col justify-center p-4"
            : "hidden"
        }
      >
        <h1 className=" text-white text-xl text-center f">
          Your order is under processing please be pation it may take a mineuts
        </h1>
        <h1 className=" text-white text-xl text-center f">
          Dont worry once it finished the product will be saved and sent to your
          email
        </h1>
      </div>
      <div
        className={
          isError || isLoading === true || isApproved
            ? "hidden"
            : " h-52 flex items-center justify-center p-8"
        }
      >
        <PayPalScriptProvider options={initialOptions}>
          <PayPalButtons
            style={{ color: "blue", label: "pay" }}
            onApprove={async (data) => {
              setIsLoading(true);
              try {
                const cart = [
                  {
                    product_token:
                      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbmNyeXB0ZWRQcm9kdWN0TmFtZSI6IlUyRnNkR1ZrWDErY2FJWE4vcnRINEJ5N1dnZEszRFYreGlYb2tvckwxc2c9IiwiZW5jcnlwdGVkUHJvZHVjdENhdGVnb3J5IjoiVTJGc2RHVmtYMTlDSHN3VzRMYTFSUkZnRm5CUy9ia3FlYngwUmkvelBIMD0iLCJlbmNyeXB0ZWRQcmljZSI6IlUyRnNkR1ZrWDEvczB5aXRLWTFYY0JFM3I1QUpxK0thd0JIUU5kYllqeDA9IiwiZW5jcnlwdGVkUHJvZHVjdEN1cnJlbmN5IjoiVTJGc2RHVmtYMTkrWU9qL2VaSXJHcXVXL0tzd2RhQ2QvTlMvWmQzTlEzND0iLCJpYXQiOjE3MTA4MTM2ODR9.8kvfkB00e0bdigGko_mptjfXGs7Tdx67Ho8WHTB-s2I",
                  },
                ];
                const payload = {
                  cart: cart,
                  orderID: data.orderID,
                };
                const bearerToken =
                  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im9tYXJrZXJqZ0BnbWFpbC5jb20iLCJwYXNzd29yZCI6Im9tYXJrZXIwOSIsInVzZXJfaWQiOjEwMDMsInVzZXJuYW1lIjoib21hcmtlcjA5IiwiaWF0IjoxNzEwMjUyODk0LCJleHAiOjE3MTI4NDQ4OTR9.Wl1QmTHFqnqWPJXENtISYCWlzrvYeKHbz_zOfSBC7YY";
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
            createOrder={createOrder}
            onCancel={() => {
              setIsCancel(true);
            }}
          />
        </PayPalScriptProvider>
      </div>

      <div
        className={
          products.length === 0
            ? "hidden"
            : " w-full bg-blue-950 text-white flex gap-3 items-center justify-center p-3 flex-col"
        }
      >
        <h1>Your keys</h1>
        <div className=" flex items-center flex-col gap-5 justify-center">
          {products.map((e, index) => {
            return (
              <div className=" p-2 bg-white flex items-center w-auto justify-center gap-3 flex-col">
                <h1 className=" text-black">{e.name}</h1>
                <span className=" text-black">{e.key}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PayPalButton;

/*
onApprove={async (data) => {
            try {
              const response = await fetch(`http://localhost:3002/process/paypal/api/orders/capture`, {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                  cart: [
                    {
                      product_token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwcm9kdWN0X25hbWUiOiJDYWxsIG9mIGR1dHkgUHJpbWUiLCJwcm9kdWN0X2NhdGVnb3J5IjoiWGJveCBTfFgiLCJwcmljZSI6NTAwLjk5LCJwcm9kdWN0X2N1cnJlbmN5IjoiVVNEIiwicHJvZHVjdF9pZCI6NjMsImlhdCI6MTcxMDA5Mjc0MH0.jSYM1FcGHR-mnOhThv1HcIqCdAhawNkXb4Lg4OlVyWA"
                    }
                  ],
                  orderID: data.orderID
                })
              });
              console.log(response);
              if (response.status === 200) {
                setIsApproved(true)
              }
            } catch (error) {
              setIsError(true)
              console.log(error.message);
            }
          }}
*/
