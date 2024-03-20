import { createSlice } from "@reduxjs/toolkit";


const cart = createSlice({
    initialState: [],
    name: "CartToken",
    reducers: {
        CartToken: (state,action) => {
            const data = action.payload.product_token
            return [...state, data];
        }
    }
})

export const { CartToken } = cart.actions;

export default cart.reducer;