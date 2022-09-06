import { createSlice } from "@reduxjs/toolkit";
import { quouteOperations } from "./quotes-operations";

const initialState = {
  quotes: [],
};

const quotesSlice = createSlice({
  name: "quotes",
  initialState,
  extraReducers: {
    [quouteOperations.gettedQuotes](state, action) {
      console.log(action.payload);
      state.quotes.quotes = action.payload;
    },
  },
});

export default quotesSlice.reducer;
