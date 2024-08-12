import { configureStore } from '@reduxjs/toolkit';
import cartSlice from './CartSlice';
import counterSlice from './counterSlice'
import authSlice from './authSlice';
import productSlice from './productSlice';
//Creating the store
const store=configureStore({
    reducer:{
        counter: counterSlice,
        cart:cartSlice,
        auth:authSlice,
        products:productSlice
    }
})
export default store;