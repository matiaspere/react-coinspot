import React from "react";
import GeneralContext from "../context/GeneralContext";
import "../styles/CoinRowHolding.css";
import CoinRowHistory from "../components/CoinRowHistory";

const History = () => {
  const { history, getLocalStorage, setHistory } = React.useContext(GeneralContext);
  
  // React.useEffect(() => {
  //   const data = getLocalStorage("history");
  //   if(data){
  //     setHistory(data);
  //   }
  // }, []);
  return (
    <div className="Wallet">
      {history.length > 0 ? (
        <>
          <p className="history-title">Your purchases</p>
          <div className="coinRowHistoryHeader header">
            <p>Asset</p>
            <div>
              <p>Amount</p>
            </div>
            <p className="coinRowHolding__text">Quantity</p>
            <p className="coinRowHolding__text">Price</p>
          </div>
          {history.map((i) => (
            <CoinRowHistory
              name={i.coinInfo[0].name}
              id={i.coinInfo[0].id}
              key={i.coinInfo[0].id}
              image={i.coinInfo[0].image}
              symbol={i.coinInfo[0].symbol}
              price={i.coinInfo[0].current_price}
              quantity={i.quantity}
              buyPrice={i.price}
            />
          ))}
        </>
      ) : (
        <p>You don't have any purchases</p>
      )}
    </div>
  );
};

export default History;
