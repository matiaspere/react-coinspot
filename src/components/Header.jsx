import React from "react";
import "../styles/Header.css";
import logo from "../images/logo.png";
import axios from "axios";

const Header = () => {
  const [marketData, setData] = React.useState({});

  
  async function fetchData() {
    const api = "https://api.coingecko.com/api/v3/global";
    const res = await axios.get(api, {
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    });
    const newData = res.data;
    setData(newData);
  }
  React.useEffect(() => {
    fetchData()
  }, [])

  return (
    <div className="Header">
      <div className="Header__left">
        {/* <img src={logo} className="Header__logo" /> */}
        <h2>Coinspot</h2>
      </div>

      <ul>
        <li><span>Cryptos:</span> {marketData.data?.active_cryptocurrencies}</li>
        <li><span>Exchanges:</span> {marketData.data?.markets}</li>
        <li><span>ICOS:</span> {marketData.data?.ongoing_icos}</li>
        {/* <li>Change % (24h): {percentage}%</li> */}
        <li><span>BTC Dominance:</span> {marketData.data?.market_cap_percentage.btc.toFixed(2)}% </li>
        <li><span>ETH Dominance:</span> {marketData.data?.market_cap_percentage.eth.toFixed(2)}% </li>
      </ul>
    </div>
  );
};

export default Header;
