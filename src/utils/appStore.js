import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./themeSlice";
import appReducer from "./appSlice";
import vedioSlice from "./vedioSlice";
import searchSlice from "./searchSlice";

const appStore = configureStore({
  reducer: {
    theme: themeReducer,
    appSlice: appReducer,
    vedioReducer: vedioSlice,
    search: searchSlice,
  },
});

export default appStore;
