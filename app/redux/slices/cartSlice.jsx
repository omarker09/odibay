import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cartSlice",
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      const itemToAdd = action.payload;
      const existingItemIndex = state.findIndex(
        (item) => item.id === itemToAdd.id
      );
      if (existingItemIndex !== -1) {
        // Item already exists, you may want to increase quantity or handle differently
        return state;
      }
      return [...state, itemToAdd];
    },
    getCart: (state, action) => {
      const localCart = localStorage.getItem("cartSystem");
      return localCart ? JSON.parse(localCart) : state;
    },
    removeCart: (state, action) => {
      const itemIdToRemove = action.payload.id;
      return state.filter((item) => item.id !== itemIdToRemove);
    },
    addToStorage: (state, action) => {
      let existingCart = JSON.parse(localStorage.getItem("cartSystem")) || [];
      existingCart = [...existingCart, action.payload];
      localStorage.setItem("cartSystem", JSON.stringify(existingCart));
      return existingCart
    },
  },
});

export const { addToCart, getCart, removeCart, addToStorage } =
  cartSlice.actions;

export default cartSlice.reducer;
