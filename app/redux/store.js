"use client"
import { configureStore } from "@reduxjs/toolkit";
import testSlice from "./slices/testSlice";
import cartSlice from "./slices/cartSlice";
import getStateData from "./slices/getStateData";
// Store Componnent


const store = configureStore({
    reducer : {
        product: testSlice,
        cart: cartSlice,
        getCart: getStateData
    },
})



export default store