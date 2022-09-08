import { createAsyncThunk } from "@reduxjs/toolkit";
import { io } from "socket.io-client";
// import { useSelector } from "react-redux";
// import { useState } from "react";
// import { useDispatch } from "react-redux";

const gettedQuotes = createAsyncThunk("quotes/gettedQuotes", async () => {
  //   const dispatch = useDispatch();
  return new Promise((resolve, reject) => {
    try {
      const socket = io("http://localhost:4000/");
      socket.on("connect", () => {
        console.log(socket.connected);
        socket.emit("start");
      });
      socket.on("ticker", (quotes) => {
        // console.log("from slice THUNK", quotes);
        resolve(quotes);
      });
    } catch (e) {
      reject(e);
    }
  });
});

export const quouteOperations = {
  gettedQuotes: gettedQuotes,
};
