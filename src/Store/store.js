// store.js
import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../Slices/userSlice';
import listReducer from '../Slices/listSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    list: listReducer,
    // Add other reducers if needed
  },
});
