import { configureStore } from "@reduxjs/toolkit";
import newsReducer from "./newsSlice";
import bookmarkReducer from "./bookmarkSlice";

export const store = configureStore({
  reducer: {
    news: newsReducer,
    bookmarks: bookmarkReducer,
  },
});
