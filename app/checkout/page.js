"use client"
import React, { useState, useEffect } from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import Page from './pagemain'; // Assuming Page is your component that uses Stripe functionality
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { isCancel } from 'axios';

const PayPalButton = ({ productId, onSuccess, onError }) => {
  const [orderId, setOrderID] = useState()

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
        setOrderID(orderData.id);
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
    try {
      response = await fetch(`http://localhost:3002/process/paypal/api/orders/${orderId}/capture`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });
    } catch (error) {
      console.log(error.message);
    }

    const orderData = await response.json();
    console.log(orderData);
  };

  const initialOptions = {
    clientId: "test",
    currency: "USD",
    intent: "capture",
    clientId: "AUnY-22zOHuwM927ejwwpM3oeGZqJo3_XPAkcnhQ0Db7GUtF7-WRYcJM6OpvQ9K76XgjcFgV8-_QfCl9"
  };
  return (
    <PayPalScriptProvider options={initialOptions}>
      <PayPalButtons onApprove={(data, action) => onApprove(data, action)} createOrder={createOrder} />
    </PayPalScriptProvider>
  );
};

export default PayPalButton;
