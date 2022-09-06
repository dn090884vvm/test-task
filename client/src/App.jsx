// import logo from "./logo.svg";
import "./App.css";
import Quotes from "./components/quotes/quotes";
import React, { useEffect, useState } from "react";
import io from "socket.io-client";
import { List } from "./App.styled";

function App() {
  const [quotesList, setQuotesList] = useState([]);

  useEffect(() => {
    const socket = io("http://localhost:4000/");
    socket.on("connection", () => console.log(socket.connected));
    socket.emit("start");
    socket.on("ticker", function (quotes) {
      // console.log(quotes);
      setQuotesList(quotes);
    });
  }, []);

  // console.log("sdfsdf", quotesList[1]);

  return (
    <div className="App">
      {
        <ul>
          {quotesList.map((quotesItem) => {
            return (
              <List key={quotesItem.ticker}>
                {`Bonds -${quotesItem.ticker} BondsMarket- ${quotesItem.exchange} Price- ${quotesItem.price}`}
                {/* <p>{`aaa - ${quotesItem.ticker}-`}</p>
                <p>{`bbb - ${quotesItem.exchange}-`}</p>
                <p>{`ccc - ${quotesItem.price}`}</p> */}
              </List>
            );
          })}
        </ul>
      }
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}

      <Quotes />
    </div>
  );
}

export default App;
