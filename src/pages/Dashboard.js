import stocks from "../data";
import { Link } from "react-router-dom";

export default function Dashboard (props) {
    return (
        <div className="Dashboard">
        <h1>Dashboard</h1>
        <h2>Most Active Stocks</h2>
        <ul>
          {stocks.map((stock) => (
            <li key={stock.symbol}>
              <Link to={`/stocks/${stock.symbol}`}>
                {stock.name} ({stock.symbol})
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );
};