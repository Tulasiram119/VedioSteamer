import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./themeSlice";
import appReducer from "./appSlice";
import vedioSlice from "./vedioSlice";
import searchSlice from "./searchSlice";
import chartSlice from "./chartSlice";

const appStore = configureStore({
  reducer: {
    theme: themeReducer,
    appSlice: appReducer,
    vedioReducer: vedioSlice,
    search: searchSlice,
    chat: chartSlice
  },
});

export default appStore;
