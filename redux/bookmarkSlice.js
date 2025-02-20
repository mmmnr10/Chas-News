import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  bookmarks: [],
};

const bookmarkSlice = createSlice({
  name: "bookmarks",
  initialState,
  reducers: {
    addBookmark: (state, action) => {
      state.bookmarks.push(action.payload);
    },
    removeBookmark: (state, action) => {
      state.bookmarks = state.bookmarks.filter((id) => id !== action.payload);
    },
  },
});

export const { addBookmark, removeBookmark } = bookmarkSlice.actions;
export default bookmarkSlice.reducer;
