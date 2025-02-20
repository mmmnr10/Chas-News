import { configureStore } from "@reduxjs/toolkit";
import newsReducer from "./newsSlice";
import bookmarkReducer from "./bookmarkSlice";

export const store = configureStore({
  reducer: {
    news: newsReducer,

    bookmarks: bookmarkReducer,
  },

  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),

  devTools: process.env.NODE_ENV !== "production",
});

export default store;
