import React from "react";
import axios, { AxiosHeaders } from "axios";
import { useState } from "react";

const useCoins = () => {
  const [coins, setCoins] = useState([]);
  const [watchlist, setWatchlist] = useState([]);
  const [holdings, setHoldings] = useState([]);
  const [balance, setBalance] = React.useState(0);
  const [invested, setInvested] = React.useState(0);

  async function fetchCoins() {
    const api =
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false";
    const res = await axios.get(api, {
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    });
    setCoins(res.data);
  }

  const addToWatchlist = (id) => {
    let exists = watchlist.some((i) => i.id === id);
    const newWatchlist = [...watchlist];
    if (exists) {
      const index = watchlist.findIndex((coin) => coin.id === id);
      newWatchlist.splice(index, 1);
    } else {
      const index = coins.findIndex((coin) => coin.id === id);
      newWatchlist.push(coins[index]);
    }
    console.log(newWatchlist);
    setWatchlist(newWatchlist);
    localStorage.setItem("watchlist", JSON.stringify(newWatchlist));
  };


  const getLocalStorage = (key) => {
    let data = localStorage.getItem(key);
    if (data) {
      data = JSON.parse(data);
    }
    return data;
  }

  const updateBalance = () => {
    let totalNow = 0;
    for (let i = 0; i < holdings.length; i++) {
      const coin = coins.filter((k) => k.id === holdings[i].coinInfo[0].id);
      totalNow = totalNow + coin[0].current_price * holdings[i].quantity;
    }
    console.log(totalNow)
    setBalance(totalNow.toFixed(2));

    let totalInvested = 0;
    for (let i = 0; i < holdings.length; i++) {
      const coin = coins.filter((k) => k.id === holdings[i].coinInfo[0].id);
      totalInvested = totalInvested + holdings[i].price * holdings[i].quantity;
    }
    setInvested(totalInvested.toFixed(2));
  }

  return {
    coins,
    setCoins,
    addToWatchlist,
    watchlist,
    setWatchlist,
    holdings,
    setHoldings,
    fetchCoins,
    balance,
    setBalance,
    invested,
    setInvested,
    getLocalStorage,
    updateBalance
  };
};
export default useCoins;
