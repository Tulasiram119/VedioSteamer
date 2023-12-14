import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./themeSlice";
import appReducer from "./appSlice";
import vedioSlice from "./vedioSlice";

const appStore = configureStore({
  reducer: {
    theme: themeReducer,
    appSlice:appReducer,
    vedioReducer:vedioSlice
  },
});

export default appStore;
