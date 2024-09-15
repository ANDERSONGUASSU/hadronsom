// src/store.js
import { configureStore } from '@reduxjs/toolkit';
import aboutReducer from './features/homeSlice'; // Vamos criar este arquivo no próximo passo

export const store = configureStore({
  reducer: {
    about: aboutReducer,
  },
});
