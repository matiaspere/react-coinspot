import React from "react";
import "../styles/Header.css";
import logo from "../images/logo.png";
import axios from "axios";

const Header = () => {
  const [marketData, setData] = React.useState({});

  React.useEffect(() => {
    async function fetchData() {
      const api = "https://api.coingecko.com/api/v3/global";
      const res = await axios.get(api, {
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
      });
      const newData = res.data.data;

      setData(newData);
    }
    fetchData();
  }, []);
  console.log(marketData);

  return (
    <div className="Header">
      <div className="Header__left">
        {/* <img src={logo} className="Header__logo" /> */}
        <h2>Coinspot</h2>
      </div>

      <ul>
        <li>Cryptos: {marketData.active_cryptocurrencies}</li>
        <li>Exchanges: {marketData.markets}</li>
        <li>ICOS: {marketData.ongoing_icos}</li>
        {/* <li>Change % (24h): {percentage}%</li> */}
        {/* <li>BTC Dominance: {data.market_cap_percentage.btc.toFixed(2)}% </li>
        <li>ETH Dominance: {data.market_cap_percentage.eth.toFixed(2)}% </li> */}
      </ul>
    </div>
  );
};

export default Header;
