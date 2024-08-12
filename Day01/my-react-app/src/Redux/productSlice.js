// src/Redux/productSlice.js
import { createSlice } from '@reduxjs/toolkit';
import { PRODUCTS } from '../constants';

const productSlice = createSlice({
  name: 'products',
  initialState: {
    products: PRODUCTS,
    searchTerm: '',
  },
  reducers: {
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },
  },
});

export const { setSearchTerm } = productSlice.actions;
export default productSlice.reducer;
