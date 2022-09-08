import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
// import { quouteOperations } from "../../redux/quotes/quotes-operations";
import { getQuote } from "../../redux/quotes-state/quotes-slice";
import io from "socket.io-client";

export default function Quotes() {
  const dispatch = useDispatch();

  const quotes = useSelector((state) => state.quotes.quotes);

  console.log("from global state Redux", quotes);

  useEffect(() => {
    // dispatch(quouteOperations.gettedQuotes());
    // dispatch(getQuote());
    const socket = io("http://localhost:4000/");
    socket.on("connect", () => {
      console.log(socket.connected);
      socket.emit("start");
    });

    socket.on("ticker", function (quotes) {
      dispatch(getQuote(quotes));
    });
  }, [dispatch]);

  return (
    <div>
      <ul>
        {quotes.map((quote) => (
          <li key={quote.ticker}>
            {`Bonds -${quote.ticker} BondsMarket- ${quote.exchange} Price- ${quote.price}`}
          </li>
        ))}
      </ul>
    </div>
  );
}
