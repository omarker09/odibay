'use client'
import { createSlice } from "@reduxjs/toolkit";


const eliteslice = createSlice({
    name: "elitez",
    initialState: [false],
    reducers: {
        trigerdon: (state, action) => {
            return true
        },
        trigerdoff: (state, action) => {
            return false
        },
    }
})


export const { trigerdon, trigerdoff } = eliteslice.actions;

export default eliteslice.reducer;