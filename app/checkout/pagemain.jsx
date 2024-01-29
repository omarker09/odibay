import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js"
import axios from "axios"
import React, { useState } from 'react'

export default function PaymentForm() {
    const [success, setSuccess] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const stripe = useStripe();
    const elements = useElements();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: "card",
            card: elements.getElement(CardElement)
        });

        if (error) {
            setLoading(false);
            setError(error.message);
            return;
        }

        try {
            const { id } = paymentMethod;
            const response = await axios.post("http://localhost:3002/api/v1/order/checkout/payment", {
                amount: 1000,
                id
            });

            if (response.data.success) {
                console.log("Successful payment");
                setSuccess(true);
            }
        } catch (error) {
            console.log("Error", error);
            setError("Something went wrong. Please try again later.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            {!success ? (
                <form className="h-screen flex flex-col items-center justify-center bg-slate-300" onSubmit={handleSubmit}>
                    <div className="w-96">
                        <div className="FormGroup w-96 bg-white text-black shadow-2xl p-5 flex flex-col">
                            <div className="FormRow">
                                <CardElement />
                            </div>
                        </div>
                        <button className="bg-orange-400 p-4 text-white w-full" disabled={!stripe || loading}>
                            {loading ? "Processing..." : "Pay"}
                        </button>
                        {error && <div className="text-red-500 mt-2">{error}</div>}
                    </div>
                </form>
            ) : (
                <div>
                    <h2>You just bought a sweet spatula. Congratulations, this is the best decision of your life!</h2>
                </div>
            )}
        </>
    );
}
