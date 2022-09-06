import { configureStore } from "@reduxjs/toolkit";
import quoteReducer from "./quotes/quotes-slice";

const store = configureStore({ reducer: { quotes: quoteReducer } });

export default store;
