import { createSlice } from '@reduxjs/toolkit';

const buySlice = createSlice({
  name: 'buy',
  initialState: {
    buy: false
  },
  reducers: {
    buyNow: (state, action) => {
      state.buy = true;
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
    cancelItem: (state, action) => {
      const { id } = action.payload;
      state.cart = state.cart.filter(item => item.id !== id);
    }
  }
});

export const { buyNow,incrementQuantity, decrementQuantity,cancelItem } = buySlice.actions;
export default buySlice.reducer;
