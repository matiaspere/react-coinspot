import React from "react";
import { useContext, useState } from "react";
import axios from "axios";
import GeneralContext from "../context/GeneralContext";
import CoinRow from "../components/CoinRow";
import "../styles/CoinRow.css";
import searchIcon from "../images/search.svg";
import Modal from "../components/Modal";

const Main = () => {
  const { coins, setCoins, fetchCoins } = useContext(GeneralContext);

  React.useEffect(()=>{
    fetchCoins();
  },[])

  return (
    <div className="MainMarket">
      <p className="MaiMarket__title">Cryptocurrency Prices by Market Cap</p>
      <div className="MainMarket__input">
        <img src={searchIcon} />
        <input placeholder="asdsa" />
      </div>
      <div className="coinRow header">
        <div></div>
        <p>#</p>
        <div className="coinRow__image"></div>
        <div>
          <p>Name</p>
        </div>
        <p className="coinRow__text">Price</p>
        <p className="coinRow__text">Change % (24H)</p>
        <p className="coinRow__text">Market Cap</p>
      </div>
      {coins.map((coin) => (
        <CoinRow
          id={coin.id}
          key={coin.id}
          name={coin.name}
          rank={coin.market_cap_rank}
          image={coin.image}
          symbol={coin.symbol}
          price={coin.current_price}
          marketCap={coin.market_cap}
          priceChange24={coin.price_change_percentage_24h}
          watchlist={coin.watchlist}
        />
      ))}

    </div>
  );
};

export default Main;
