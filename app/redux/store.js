import { configureStore } from "@reduxjs/toolkit";
import testSlice from "./slices/testSlice";
import cartSlice from "./slices/cartSlice";
// Store Componnent
const store = configureStore({
    reducer : {
        product: testSlice,
        cart: cartSlice
    }
})

export default store