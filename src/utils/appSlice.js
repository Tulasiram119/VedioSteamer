import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "sideBar",
  initialState: {
    isMenuOpen: true,
  },
  reducers: {
    toggleMenu: (state) => {
      state.isMenuOpen = !state.isMenuOpen;
    },
  },
});

export default appSlice.reducer;

export const { toggleMenu } = appSlice.actions;
