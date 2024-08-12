// import { createSlice } from "@reduxjs/toolkit"

// const CartSlice=createSlice({
//     name: "cart",
//     initialState:{
//         count : 0
//     },
//     reducers:{
//        increment: (state, action)=>{
//           state.count += action.payload;
//        },
//        decrement: () => {},
//     }

// })
// export const {increment , decrement} = CartSlice.actions;
// export default CartSlice.reducer;

// src/Redux/CartSlice.js
// import { createSlice } from '@reduxjs/toolkit';

// const initialState = {
//   items: [],
// };

// const cartSlice = createSlice({
//   name: 'cart',
//   initialState,
//   reducers: {
//     addToCart(state, action) {
//       const item = action.payload;
//       state.items.push({ ...item, quantity: 1 });
//     },
//     removeFromCart(state, action) {
//       state.items = state.items.filter(item => item.id !== action.payload);
//     },
//     increment(state, action) {
//       const item = state.items.find(item => item.id === action.payload);
//       if (item) {
//         item.quantity += 1;
//       }
//     },
//     decrement(state, action) {
//       const item = state.items.find(item => item.id === action.payload);
//       if (item && item.quantity > 1) {
//         item.quantity -= 1;
//       }
//     },
//   },
// });

// export const { addToCart, removeFromCart, increment, decrement } = cartSlice.actions;
// export default cartSlice.reducer;


import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cart: []
  },
  reducers: {
    addCart: (state, action) => {
      const existingItem = state.cart.find(item => item.id === action.payload.id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
      }
    },
    incrementQuantity: (state, action) => {
      const item = state.cart.find(item => item.id === action.payload.id);
      if (item) {
        item.quantity += 1;
      }
    },
    decrementQuantity: (state, action) => {
      const item = state.cart.find(item => item.id === action.payload.id);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
      }
    },
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter(item => item.id !== action.payload.id);
    },
    cancelItem: (state, action) => {
      const { id } = action.payload;
      state.cart = state.cart.filter(item => item.id !== id);
    }
  }
});

export const { addCart, incrementQuantity, decrementQuantity, removeFromCart ,cancelItem} = cartSlice.actions;

export default cartSlice.reducer;
