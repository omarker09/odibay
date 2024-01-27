import { createSlice } from "@reduxjs/toolkit";

// Fetch initial state from localStorage or set it as an empty array


const cartSlice = createSlice({
    name: "cartSlice",
    initialState: [],
    reducers: {
        addProduct: (state, action) => {
            const foundProductIndex = state.findIndex(product => product.id === action.payload.id);

            if (foundProductIndex !== -1) {
                state[foundProductIndex].quantity += 1;
            } else {
                const productClone = { ...action.payload, quantity: 1 };
                state.push(productClone);
            }
            // Update localStorage after modifying the state
            localStorage.setItem("cartState", JSON.stringify(state));
        },
        deleteProduct: (state, action) => {
            const newState = state.filter(product => product.id !== action.payload.id);
            // Update state and localStorage
            localStorage.setItem("cartState", JSON.stringify(newState));
            return newState;
        },
        quantityPlus: (state, action) => {
            const foundProduct = state.find(product => product.id === action.payload.id);
            if (foundProduct) {
                foundProduct.quantity += 1;
                localStorage.setItem("cartState", JSON.stringify(state));
            }
        },
        quantityMinus: (state, action) => {
            const foundProduct = state.find(product => product.id === action.payload.id);
            if (foundProduct) {
                foundProduct.quantity -= 1;
                if (foundProduct.quantity < 0) {
                    foundProduct.quantity = 0;
                }
                localStorage.setItem("cartState", JSON.stringify(state));
            }
        },
    }
});

export const { addProduct, deleteProduct, quantityPlus, quantityMinus } = cartSlice.actions;

export default cartSlice.reducer;
