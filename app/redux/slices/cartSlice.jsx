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
      try {
        const localCart = localStorage.getItem("cartSystem");
        return localCart ? JSON.parse(localCart) : state;
      } catch (error) {
        console.error("Error while fetching cart from local storage:", error);
        return state;
      }
    },
    removeCart: (state, action) => {
      const itemIdToRemove = action.payload.id;
      return state.filter((item) => item.id !== itemIdToRemove);
    },
    addToStorage: (state, action) => {
      // You should handle localStorage availability in the component where you dispatch this action
      let existingCart = JSON.parse(localStorage.getItem("cartSystem") || "[]");
      existingCart = [...existingCart, action.payload];
      localStorage.setItem("cartSystem", JSON.stringify(existingCart));
      return existingCart;
    },
    removeFromStorage: (state, action) => {
      // Parse existing items from local storage
      let existingCart = JSON.parse(localStorage.getItem("cartSystem") || "[]");
      // Filter out the item with the provided ID
      const updatedCart = existingCart.filter(item => item.id !== action.payload.id);
      // Update local storage with the modified cart
      localStorage.setItem("cartSystem", JSON.stringify(updatedCart));
      return updatedCart;
    },
    OnRefresh: (state, action) => {
      try {
        const localData = localStorage.getItem("cartSystem");
        const parsedData = JSON.parse(localData);
        return parsedData || state;
      } catch (error) {
        console.error("Error while refreshing cart from local storage:", error);
        return state;
      }
    }
  },
});

export const { addToCart, getCart, removeCart, addToStorage, removeFromStorage, OnRefresh } =
  cartSlice.actions;

export default cartSlice.reducer;
