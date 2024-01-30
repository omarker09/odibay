'use client'
import { createSlice } from "@reduxjs/toolkit";
import { useState, useEffect } from "react";

const initialState = {
    mode: typeof window !== 'undefined' && JSON.parse(localStorage.getItem("darkMode")) || false
};
const themeSlice = createSlice({
    initialState,
    name: "themeSlice",
    reducers: {
        changeTheme: (state, action) => {
            state.mode = !state.mode;
            localStorage.setItem("darkMode", JSON.stringify(state.mode));
        }
    }
});

export const { changeTheme } = themeSlice.actions;
export default themeSlice.reducer;



/*
const initialState = {
    mode: JSON.parse(localStorage.getItem("darkMode")) || false
    // typeof window !== 'undefined' && localStorage.getItem("theme") === "light"
// typeof window !== 'undefined' && JSON.parse(localStorage.getItem("darkMode"))
// JSON.parse(localStorage.getItem("darkMode")) || false
};
*/