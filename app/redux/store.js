"use client"
import { configureStore } from "@reduxjs/toolkit";
import testSlice from "./slices/testSlice";
import cartSlice from "./slices/cartSlice";
import getStateData from "./slices/getStateData";
import themeSlice from "./slices/themeSlice";
// Store Componnent


const store = configureStore({
    reducer : {
        product: testSlice,
        cart: cartSlice,
        getCart: getStateData,
        darkMode: themeSlice
    },
    preloadedState: {
        themeSlice: {
          isLight: typeof window !== 'undefined' && localStorage.getItem("theme") === "light"
        }
      }
})



export default store