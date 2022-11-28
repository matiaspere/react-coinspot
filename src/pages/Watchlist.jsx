import React from "react";
import GeneralContext from "../context/GeneralContext";
import CoinRow from "../components/CoinRow";
import "../styles/CoinRow.css";

const Watchlist = () => {
  const { coins, watchlist, setWatchlist, setSearch } =
    React.useContext(GeneralContext);
  setSearch("");
  React.useEffect(() => {
    const data = localStorage.getItem("watchlist");
    if (data) {
      const data2 = JSON.parse(data);
      setWatchlist(data2);
    }
  }, [watchlist]);

  return (
    <div className="MainMarket">
      <p className="MaiMarket__title">Your Watchlist</p>
      <div className="coinRow header">
        <div></div>
        <p>#</p>
        <div className="coinRow__image"></div>
        <div>
          <p>Name</p>
        </div>
        <p className="coinRow__text">Price</p>
        <p className="coinRow__text">24%</p>
        <p className="coinRow__text">Market Cap</p>
      </div>
      {watchlist.map((coin) => (
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

export default Watchlist;
