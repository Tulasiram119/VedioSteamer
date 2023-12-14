import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
  name: "theme",
  initialState: {
    color: "black",
  },
  reducers: {
    changeTheme: (state) => {
      state.color = state.color === "white" ? "black" : "white";
    },
  },
});

export default themeSlice.reducer;
export const { changeTheme } = themeSlice.actions;
