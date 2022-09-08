import { createSlice } from "@reduxjs/toolkit";
import { quouteOperations } from "./quotes-operations";

const initialState = {
  quotes: [],
};

const quotesSlice = createSlice({
  name: "quotes",
  initialState,
  reducers: {
    getQuote: (state, action) => {
      state.quotes = action.payload;
    },
  },
  // extraReducers: {
  //   [quouteOperations.gettedQuotes.fulfilled](state, action) {
  //     console.log("payload is", action.payload);
  //     state.quotes = action.payload;
  //     // console.log("sfsfsfsfsf", state.quotes);
  //   },
  // },
});

export default quotesSlice.reducer;
export const { getQuote } = quotesSlice.actions;
