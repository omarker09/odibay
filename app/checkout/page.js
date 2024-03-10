"use client"
import React, { useState, useEffect } from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import Page from './pagemain'; // Assuming Page is your component that uses Stripe functionality
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import axios from 'axios';

const PayPalButton = () => {
  const [isCancel, setIsCancel] = useState(false)
  const [isError, setIsError] = useState(false)
  const [isApproved, setIsApproved] = useState(false)
  const [products, setProducts] = useState([])
  const createOrder = async (data, actions) => {
    try {
      const response = await fetch('http://localhost:3002/process/paypal/api/orders', {
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
        }),
      });
      const orderData = await response.json();
      console.log(orderData.id);
      if (orderData.id) {
        return orderData.id
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

  const onApproveFun = async (data) => {

  }

  const initialOptions = {
    currency: "USD",
    intent: "capture",
    clientId: "AekJv-ARPKH-LoicG-ybAlfu2S1o6yZKKdK9rucpOsD1e11LDpt8Acn-eiXFuEgZDLp1D0DwHnVezb11"
  };
  return (
    <div className=' h-screen w-full flex items-center flex-col justify-start gap-4'>
      <div className={isApproved ? ' w-full  bg-green-600 flex items-center justify-center p-4' : "hidden"}>
        <h1 className=' text-white text-xl text-center f'>you have seccesfully bought your product</h1>
      </div>
      <div className={isCancel ? ' w-full  bg-red-600 flex items-center justify-center p-4' : "hidden"}>
        <h1 className=' text-white text-xl text-center f'>your order has been canceld</h1>
      </div>
      <div className={isError ? ' w-full  bg-red-600 flex items-center justify-center p-4' : "hidden"}>
        <h1 className=' text-white text-xl text-center f'>your order has error something happend</h1>
      </div>
      <div className=' h-52 flex items-center justify-center p-8'>
        <PayPalScriptProvider options={initialOptions}>
          <PayPalButtons style={{ color: "blue", label: "pay" }} onApprove={async (data) => {
            try {
            const cart = [
              {
                product_token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwcm9kdWN0X25hbWUiOiJDYWxsIG9mIGR1dHkgUHJpbWUiLCJwcm9kdWN0X2NhdGVnb3J5IjoiWGJveCBTfFgiLCJwcmljZSI6NTAwLjk5LCJwcm9kdWN0X2N1cnJlbmN5IjoiVVNEIiwicHJvZHVjdF9pZCI6NjMsImlhdCI6MTcxMDA5Mjc0MH0.jSYM1FcGHR-mnOhThv1HcIqCdAhawNkXb4Lg4OlVyWA"
              }
            ]
            const payload = {
              cart: cart,
              orderID: data.orderID
            };
            const config = {
              headers: {
                'Content-Type': 'application/json',
              }
            };
            axios.post("http://localhost:3002/process/paypal/api/orders/capture", payload, config)
              .then((resp) => {
                console.log(resp);
                setIsApproved(true)
                setProducts(resp.data.rest)
              })
              .catch((err) => {
                console.log(err);
                setIsError(true)
              });
            } catch {
              console.log("error payment")
            }
          }} createOrder={createOrder} onCancel={() => { setIsCancel(true) }} />
        </PayPalScriptProvider>
      </div>
      <div className={products.length === 0 ? "hidden" : ' w-full bg-blue-950 text-white flex gap-3 items-center justify-center p-3 flex-col'}>
        <h1>Your keys</h1>
        <div className=' flex items-center flex-col gap-5 justify-center'>
          {products.map((e, index) => {
            return <div className=' p-2 bg-white flex items-center w-auto justify-center gap-3 flex-col'>
              <h1 className=' text-black'>{e.name}</h1>
              <span className=' text-black'>{e.key}</span>
            </div>
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