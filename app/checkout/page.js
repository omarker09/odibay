"use client"
import React, { useState, useEffect } from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import Page from './pagemain'; // Assuming Page is your component that uses Stripe functionality
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import axios from 'axios';

const PayPalButton = () => {
  const [isCancel, setIsCancel] = useState(false)
  const [isApproved, setIsApproved] = useState(false)
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
              product_token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwcm9kdWN0X25hbWUiOiJGSUZBIDIzIiwicHJvZHVjdF9jYXRlZ29yeSI6IlBTNSIsInByaWNlIjoyNS41OSwicHJvZHVjdF9jdXJyZW5jeSI6IlVTRCIsInByb2R1Y3RfaWQiOjQ5LCJpYXQiOjE3MDk3NTY4NjF9.qsXpAH6A_anzlYztT6Rv58y4a6XZH59BbJW5Tmljrs4"
            },
            {
              product_token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwcm9kdWN0X25hbWUiOiJjc2dvIiwicHJvZHVjdF9jYXRlZ29yeSI6IlBDIiwicHJpY2UiOjQ1LjU5LCJwcm9kdWN0X2N1cnJlbmN5IjoiVVNEIiwicHJvZHVjdF9pZCI6NTAsImlhdCI6MTcwOTc1Njg4Mn0.RmpDIFL4is26UNLAW-8wOsHO_2d9WXfx-7A_PR-voXQ"
            },
          ],
        }),
      });
      const orderData = await response.json();
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

  const onApprove = async (data, actions) => {
    let response; // Move the declaration outside the try block
    const orderID = data.id
    try {
      response = await fetch(`http://localhost:3002/process/paypal/api/orders/capture`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          orderID
        })
      });
    } catch (error) {
      console.log(error.message);
    }

    const orderData = await response.json();
  };

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
      <div className=' h-52 flex items-center justify-center p-8'>
        <PayPalScriptProvider options={initialOptions}>
          <PayPalButtons style={{color: "blue", label: "pay"}} onApprove={async (data) => {
            try {
              const response = await fetch(`http://localhost:3002/process/paypal/api/orders/capture`, {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                  orderID: data.orderID
                })
              });
              console.log(response);
              if (response.status === 201) {
                setIsApproved(true)
              }
            } catch (error) {
              console.log(error.message);
            }
          }} createOrder={createOrder} onCancel={() => { setIsCancel(true) }} />
        </PayPalScriptProvider>
      </div>
    </div>
  );
};

export default PayPalButton;
