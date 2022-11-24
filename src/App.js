import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GeneralContext from "./context/GeneralContext";
import useCoins from "./hooks/useCoins";
import Main from "./pages/Main";
import Watchlist from "./pages/Watchlist";
import Layout from "./pages/Layout";
import Wallet from "./pages/Wallet";
import History from "./pages/History";

import axios from "axios";

function App() {
  const useCoinsHook = useCoins();
  const {
    setCoins,
    getLocalStorage,
    setHoldings,
    setHistory,
    updateBalance,
    coins,
    history,
  } = useCoinsHook;

  const [page, setPage] = React.useState(1);

  async function fetchCoins() {
    try {
      const api = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=${page}&sparkline=false`;
      const res = await axios.get(api, {
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
      });
      setCoins(res.data);
    } catch (error) {
      console.error(error);
    }
  }

  // console.log(fetchin().then((datos) => setCoins(datos)))
  React.useEffect(() => {
    fetchCoins();
    const dataHoldings = getLocalStorage("holdings");
    if (dataHoldings) {
      setHoldings(dataHoldings);
    }

    const dataHistory = getLocalStorage("history");
    if (dataHistory) {
      setHistory(dataHistory);
    }
  }, []);

  React.useEffect(() => {
    fetchCoins(page);
  }, [page]);

  return (
    <GeneralContext.Provider value={useCoinsHook}>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Main page={page} setPage={setPage} />} />
            <Route path="/watchlist" element={<Watchlist />} />
            <Route path="/wallet" element={<Wallet />} />
            <Route path="/history" element={<History />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </GeneralContext.Provider>
  );
}

export default App;
