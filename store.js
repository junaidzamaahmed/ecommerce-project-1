import { configureStore } from "@reduxjs/toolkit";
import mobilemenuReducer from "./slices/mobilemenuSlice";

export const store = configureStore({
  reducer: {
    mobilemenu: mobilemenuReducer,
  },
});
