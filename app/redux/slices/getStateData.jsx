import { createSlice } from "@reduxjs/toolkit";



const cartState = createSlice({
    initialState: [],
    name: "cartState",
    reducers: {
        getStateData: (state,action) => {
            return state
        }
    }
})

export const { getStateData} = cartState.actions;

export default cartState.reducer;