import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slices/userSlice';
import modalReducer from './slices/modalSlice'; // Import the modal slice

const store = configureStore({
  reducer: {
    user: userReducer,
    modal: modalReducer, // Add the modal reducer here
  },
});

export default store;
