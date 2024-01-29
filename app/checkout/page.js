"use client"
"use client"
import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import Page from './pagemain'; // Assuming Page is your component that uses Stripe functionality

// Load Stripe.js outside of your component to avoid recreating stripe object on every render
const stripePromise = loadStripe('pk_test_51OdZBxDBAMim0vqB1vxrAhMl00u0bSG5OeQ8zzjVXK4i5U1XJ4ilL4AmQwrrTJetdwuI5ZSRGuwjIJ3DeanAkohI000gaKeTAf');

function App() {
  return (
    <Elements stripe={stripePromise}>
      <Page />
    </Elements>
  );
}

export default App;
