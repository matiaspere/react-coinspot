import React from "react";
import GeneralContext from "../context/GeneralContext";
import "../styles/CoinRowHolding.css";
import Modal from "../components/Modal";
import CoinRowHistory from "../components/CoinRowHistory";
import addWhite from "../images/addWhite.svg";
import down from "../images/down.svg";
import up from "../images/up.svg";

const History = () => {
  const { holdings, coins } = React.useContext(GeneralContext);

  return (
    <div className="Wallet">
      {holdings.length > 0 ? (
        <>
          <p className="holdings-title">Your purchases</p>
          <div className="coinRowHistoryHeader header">
            <p>Asset</p>
            <div>
              <p>Amount</p>
            </div>
            <p className="coinRowHolding__text">Quantity</p>
            <p className="coinRowHolding__text">Price</p>
          </div>
          {holdings.map((i) => (
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
        <p>You don't have Cryptos in your portfolio</p>
      )}
    </div>
  );
};

export default History;

// <div className="Wallet__money">
// <div>
//   <p className="Wallet__money-p">Current Balance</p>
//   <div className="Wallet__money-money">
//     <p className={classname ? "balance__up" : "balance__down"}>
//       ${balance}
//     </p>
//     <div className={classname ? "percentage_up" : "percentage_down"}>
//       <img src={classname ? up : down} />
//       <p>{classname ? percentage : 100 - percentage}%</p>
//     </div>
//   </div>
//   {/* <p className="Wallet__money-p">invested: {invested}</p> */}
// </div>
// <div>
//   <button onClick={() => setToggle(true)}>
//     <img src={addWhite} />
//     Add New
//   </button>
// </div>
// </div>
