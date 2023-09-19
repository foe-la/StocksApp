import React from "react";
import stocks from "../data";
import { useParams } from "react-router-dom";

export default function Stock() {
  const { symbol } = useParams();
  const stock = stocks.find((stock) => stock.symbol === symbol);

  if (!stock) {
    return <div>Loading...</div>;
  }

  return (
    <div className="Stock">
      <h2>Name: {stock.name}</h2>
      <h2>Price: {stock.lastPrice}</h2>
    </div>
  );
}