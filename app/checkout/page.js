"use client"
import React, { useState, useEffect } from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import Page from './pagemain'; // Assuming Page is your component that uses Stripe functionality
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { isCancel } from 'axios';

// Load Stripe.js outside of your component to avoid recreating stripe object on every render
const clientId = "https://www.paypal.com/sdk/js?client-id=EOSot85t7JnxOMNqOqjEr8Y2Mg7H3veAOfjNnUadATJhvO2RprmOECblyKi4LWyA6FtmAGHJqMuJe7Ex"

function Checkout() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [onSec, setOnsec] = useState(false)
  const [onCancel, setOnCancel] = useState(false)
  /*
  
    const addPaypalScript = () => {
      const script = document.createElement("script")
      script.src = "https://www.paypal.com/sdk/js?client-id=ASQx3yIX187Ipj-y6wTvBvDiNhIEjbTcgg-2qwBB3pju9vRj5idyX-O_GMFmyIgWXrtnRMn4CGHjNJ-l"
      script.type = "text/javascript"
      script.async = true
      script.onload = () => setIsLoaded(true)
      document.body.appendChild(script)
    }
    useEffect(() => {
      if (window.paypal) {
        setIsLoaded(true)
        return
      }
      addPaypalScript()
    }, [])
  */
  const initialOptions = {
    clientId: "AekJv-ARPKH-LoicG-ybAlfu2S1o6yZKKdK9rucpOsD1e11LDpt8Acn-eiXFuEgZDLp1D0DwHnVezb11",
    currency: "USD",
    intent: "capture"
  };
  const product = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwcm9kdWN0X25hbWUiOiJNaW5lY3JhZnQiLCJwcm9kdWN0X2NhdGVnb3J5IjoiUEMiLCJwcmljZSI6MzUuNTksInByb2R1Y3RfaWQiOjIxLCJpYXQiOjE3MDc4NjIwNzF9.PIpBEfTwo5t1KiPIrLko4qLYFxuzeBb5XCt_B4OKZOo"
  const handleOrder = () => {
    return fetch("http://localhost:3002/process/paypal/paynow", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        items: [
          {
            id: 1,
            quantity: 2,
          },
          { id: 2, quantity: 3 },
        ],
      }),
    })
      .then(res => {
        if (res.ok) return res.json()
        return res.json().then(json => Promise.reject(json))
      })
      .then(({ id }) => {
        return id
      })
      .catch(e => {
        console.error(e.error)
      })
  }
  return (
    <div className='  items-center gap-3 rounded-md justify-center flex flex-col h-auto bg-slate-500'>

      <div className={onSec ? ' bg-green-400 p-3' : 'hidden'}>
        <h1 className=' text-white'>Payment has seccesfully purchased</h1>
      </div>

      <div className={onCancel ? '  hidden' : ' bg-green-400 p-3'}>
        <h1 className=' text-white'>Payment has been canceld</h1>
      </div>
      <div className=' w-96 h-auto'>
        <PayPalScriptProvider options={initialOptions}>
          <PayPalButtons
            className=' bg-transparent'
            style={{ layout: "vertical", color: "blue", label: "buynow", }}
            createOrder={handleOrder}
            onCancel={() => {
              setOnCancel(true)
              setOnsec(false)
            }}
            onApprove={() => {
              setOnCancel(false)
              setOnsec(true)
              setTimeout(() => {
                setOnsec(false)
              }, 2000)
            }}
          />
        </PayPalScriptProvider>
      </div>
    </div>
  );
}

export default Checkout;
