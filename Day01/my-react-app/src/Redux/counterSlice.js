import { createSlice } from "@reduxjs/toolkit"
//Creating the slice
const counterSlice=createSlice({
    name:'counter',
    initialState:{
        count : 0,
        buy:false
    },
    reducers:{
        increment:(state,action)=>{
            state.count+=action.payload;  //1
        },
        decrement:()=>{},
        buyNow:(state,action)=>{
            state.buy=true;
        }
    }
})

export default counterSlice.reducer// one file can't have two default export(reducer-->default export)
export const {increment,decrement,buyNow}=counterSlice.actions//named export should be imported in {},many named exports can be used(actions --> named export)