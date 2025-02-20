import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  articles: [],
  status: "idle",
  error: null,
};

const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {
    setNews: (state, action) => {
      state.articles = action.payload;
      state.status = "succeeded";
    },

    setLoading: (state) => {
      state.status = "loading";
    },

    setError: (state, action) => {
      state.status = "failed";
      state.error = action.payload;
    },

    updateArticle: (state, action) => {
      const index = state.articles.findIndex(
        (article) => article.article_id === action.payload.article_id
      );
      if (index !== -1) {
        state.articles[index] = action.payload;
      }
    },

    clearArticles: (state) => {
      state.articles = [];
      state.status = "idle";
      state.error = null;
    },
  },
});

export const { setNews, setLoading, setError, updateArticle, clearArticles } =
  newsSlice.actions;

export default newsSlice.reducer;
