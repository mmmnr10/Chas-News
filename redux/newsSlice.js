import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  articles: [],
};

const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {
    setNews: (state, action) => {
      state.articles = action.payload;
    },
  },
});

export const { setNews } = newsSlice.actions;
export default newsSlice.reducer;
