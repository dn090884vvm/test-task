import { createAsyncThunk } from "@reduxjs/toolkit";
import { io } from "socket.io-client";

const gettedQuotes = createAsyncThunk("quotes/gettedQuotes", async () => {
  try {
    const socket = io("http://localhost:4000/");
    // socket.on("connection", () => console.log(socket.connected));
    socket.emit("start");
    socket.on("ticker", function (quotes) {
      console.log("from slice THUNK", quotes);
      return quotes;
    });
  } catch (error) {}
});

export const quouteOperations = {
  gettedQuotes: gettedQuotes,
};
