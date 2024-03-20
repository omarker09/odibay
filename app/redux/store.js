"use client"
import { configureStore } from "@reduxjs/toolkit";

import cartSlice from "./slices/cartSlice";
import { getCart,removeCart } from "./slices/cartSlice";
// Store Componnent


const store = configureStore({
    reducer : {
        cart: cartSlice,
        getCart: getCart,
        removeCart: removeCart
    }
})



export default store