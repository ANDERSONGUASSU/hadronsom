// frontend/src/app/store.js
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import homeSlice from "../features/homeSlice";
import contactSlice from "features/contactSlice";

const rootReducer = combineReducers({
  home: homeSlice,
  contact: contactSlice,
});

export const store = configureStore({
  reducer: rootReducer,
});
