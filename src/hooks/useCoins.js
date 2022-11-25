import React from "react";
import axios, { AxiosHeaders } from "axios";
import { useState } from "react";

const useCoins = () => {
  const [coins, setCoins] = useState([]);
  const [watchlist, setWatchlist] = useState([]);
  const [holdings, setHoldings] = useState([]);
  const [history, setHistory] = useState([]);
  const [balance, setBalance] = useState(0);
  const [invested, setInvested] = useState(0);
  const [search, setSearch] = useState("");
  const [totalCoins, setTotalCoins] = useState([]);

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
  };

  const updateBalance = () => {
    let totalNow = 0;
    for (let i = 0; i < history.length; i++) {
      const coin = totalCoins?.filter((k) => k.id === history[i].coinInfo[0].id);
      totalNow = totalNow + coin[0]?.current_price * history[i].quantity;
    }
    setBalance(totalNow.toFixed(2));

    let totalInvested = 0;
    for (let i = 0; i < history.length; i++) {
      const coin = totalCoins?.filter((k) => k.id === history[i].coinInfo[0].id);
      totalInvested = totalInvested + history[i].price * history[i].quantity;
    }
    setInvested(totalInvested.toFixed(2));
  };

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const filterCoinSearch = (arr) => {
    let searchedCoin = [];
    if (search < 1) {
      searchedCoin = arr;
    } else {
      searchedCoin = arr.filter((coin) => {
        console.log(arr);
        const coinName = coin.name.toLowerCase();
        const searchName = search.toLowerCase();
        return coinName.includes(searchName);
      });
    }
    return searchedCoin;
  };

  return {
    coins,
    setCoins,
    addToWatchlist,
    watchlist,
    setWatchlist,
    history,
    setHistory,
    balance,
    setBalance,
    invested,
    setInvested,
    getLocalStorage,
    updateBalance,
    search,
    handleSearch,
    filterCoinSearch,
    holdings,
    setHoldings,
    totalCoins,
    setTotalCoins,
  };
};
export default useCoins;
