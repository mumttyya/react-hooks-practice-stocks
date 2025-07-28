import React from "react";
import Header from "./Header";
import MainContainer from "./MainContainer";

const [sortType, setSortType] = useState("");

const sortedStocks = [...stocks].sort((a, b) => {
  if (sortType === "Alphabetically") {
    return a.ticker.localeCompare(b.ticker);
  } else if (sortType === "Price") {
    return a.price - b.price;
  }
  return 0;
});
