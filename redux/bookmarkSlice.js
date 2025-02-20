import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  bookmarks: [],
};

const bookmarkSlice = createSlice({
  name: "bookmarks",
  initialState,
  reducers: {
    
    addBookmark: (state, action) => {
      
      if (!state.bookmarks.includes(action.payload)) {
        state.bookmarks.push(action.payload);
      }
    },
   
    removeBookmark: (state, action) => {
      state.bookmarks = state.bookmarks.filter((id) => id !== action.payload);
    },
   
    clearBookmarks: (state) => {
      state.bookmarks = [];
    },
    
    sortBookmarks: (state) => {
      state.bookmarks.sort((a, b) => a - b); 
  },
});

export const { addBookmark, removeBookmark, clearBookmarks, sortBookmarks } =
  bookmarkSlice.actions;
export default bookmarkSlice.reducer;
