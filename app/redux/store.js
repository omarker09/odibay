"use client"
import { configureStore } from "@reduxjs/toolkit";

import cartSlice from "./slices/cartSlice";
import { getCart,removeCart } from "./slices/cartSlice";
import { CartToken } from "./slices/cart";
// Store Componnent


const store = configureStore({
    reducer : {
        cart: cartSlice,
        cartToken: CartToken,
        getCart: getCart,
        removeCart: removeCart
    }
})



export default store