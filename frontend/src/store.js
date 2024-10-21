import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slices/userSlice'; // Create a userSlice or other slices as needed

const store = configureStore({
  reducer: {
    user: userReducer, // Add your reducers here
  },
});

export default store;
