import React from "react";
import { useContext, useState } from "react";
import GeneralContext from "../context/GeneralContext";
import CoinRow from "../components/CoinRow";
import "../styles/CoinRow.css";
import Input from "../components/Input";
import { Pagination } from "@mui/material";

const Main = ({setPage, page}) => {
  const { coins, filterCoinSearch, updateBalance } =
    useContext(GeneralContext);

  const searchedCoin = filterCoinSearch(coins);

  const handleChange = (page) => {
    setPage(page)
  }

  return (
    <div className="MainMarket">
      <p className="MaiMarket__title">Cryptocurrency Prices by Market Cap</p>
      <Input />
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
      {searchedCoin.map((coin) => (
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
            <Pagination onChange={(e) => handleChange(e.target.textContent)} count={100} sx={{marginTop:"20px"}}/>
    </div>
  );
};

export default Main;
