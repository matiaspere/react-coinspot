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

  return (
    <GeneralContext.Provider value={useCoinsHook}>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Main />} />
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
