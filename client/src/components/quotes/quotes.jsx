import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { quouteOperations } from "../../redux/quotes/quotes-operations";

export default function Quotes() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(quouteOperations.gettedQuotes());
  }, [dispatch]);

  const quotes = useSelector((state) => state.quotes.quotes);
  console.log("from global state Redux", quotes);

  return (
    <div>
      <p>My</p>
      <p>hernya</p>
    </div>
  );
}
