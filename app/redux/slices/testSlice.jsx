import { createSlice } from "@reduxjs/toolkit";


const eliteslice = createSlice({
    name: "elitez",
    initialState: {bol: false},
    reducers: {
        trigerdon: (state, action) => {
            return { bol: true };
        },
        trigerdoff: (state, action) => {
            return { bol: false };
        },
    }
})


export const { trigerdon, trigerdoff } = eliteslice.actions;

export default eliteslice.reducer;