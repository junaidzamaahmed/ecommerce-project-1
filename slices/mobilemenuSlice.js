import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mobileMenuValue: false,
  mobileCatagValue: false,
};

export const mobilemenuSlice = createSlice({
  name: "mobilemenu",
  initialState,
  reducers: {
    toggleMobileMenu: (state) => {
      state.mobileMenuValue = !state.mobileMenuValue;
    },
    toggleMobileCatag: (state) => {
      state.mobileCatagValue = !state.mobileCatagValue;
    },
  },
});

// Action creators are generated for each case reducer function
export const { toggleMobileMenu, toggleMobileCatag } = mobilemenuSlice.actions;
export default mobilemenuSlice.reducer;
