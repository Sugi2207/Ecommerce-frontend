// src/Redux/authSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Simulate an API call for login and signup
const mockApiCall = (data) =>
  new Promise((resolve) => setTimeout(() => resolve(data), 1000));

export const login = createAsyncThunk('auth/login', async (user) => {
  const response = await mockApiCall(user);
  return response;
});

export const signup = createAsyncThunk('auth/signup', async (user) => {
  const response = await mockApiCall(user);
  return response;
});

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    isAuthenticated: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(login.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isAuthenticated = true;
      })
      .addCase(signup.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isAuthenticated = true;
      });
  },
});

export default authSlice.reducer;
