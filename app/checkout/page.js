"use client"
import React, { useState, useEffect } from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import Page from './pagemain'; // Assuming Page is your component that uses Stripe functionality
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { isCancel } from 'axios';

const PayPalButton = ({ productId, onSuccess, onError }) => {

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
              id: 1,
              quantity: 1,
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
    <PayPalScriptProvider options={initialOptions}>
      <PayPalButtons onApprove={async (data, action) => {
        try {
          console.log(data);
          response = await fetch(`http://localhost:3002/process/paypal/api/orders/capture`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              orderID: data.orderID
            })
          });
        } catch (error) {
          console.log(error.message);
        }
      }} createOrder={createOrder} onCancel={() => {alert("cancel order")}} />
    </PayPalScriptProvider>
  );
};

export default PayPalButton;
