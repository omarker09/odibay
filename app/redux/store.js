import { configureStore } from "@reduxjs/toolkit";
import testSlice from "./slices/testSlice";

// Store Componnent
const store = configureStore({
    reducer : {
        product: testSlice
    }
})

export default store