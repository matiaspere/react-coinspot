import React from "react";
import GeneralContext from "../context/GeneralContext";
import "../styles/CoinRowHolding.css";
import Modal from "../components/Modal";
import CoinRowHolding from "../components/CoinRowHolding";
import addWhite from "../images/addWhite.svg";
import down from "../images/down.svg";
import up from "../images/up.svg";
import roundNumber from "../utils/roundNumber";

const Wallet = ({ monedas }) => {
  const {
    holdings,
    setHoldings,
    coins,
    balance,
    invested,
    getLocalStorage,
    updateBalance,
    fetchCoins,
    history,
  } = React.useContext(GeneralContext);
  const [toggle, setToggle] = React.useState(false);

  updateBalance();
  
  React.useEffect(() => {
    updateBalance()
  }, [history])

  let classname = Math.floor(balance) >= Math.floor(invested);
  let percentage = roundNumber((Math.floor(balance) / Math.floor(invested) * 100), 2);

  return (
    <div className="Wallet">
      <div className="Wallet__money">
        <div>
          <p className="Wallet__money-p">Current Balance</p>
          <div className="Wallet__money-money">
            <p className={classname ? "balance__up" : "balance__down"}>
              ${balance}
            </p>
            <div className={classname ? "percentage_up" : "percentage_down"}>
              <img src={classname ? up : down} />
              <p>{classname ? roundNumber(percentage - 100, 2) : roundNumber(100 - percentage, 2)}%</p>
            </div>
          </div>
          {/* <p className="Wallet__money-p">invested: {invested}</p> */}
        </div>
        <div>
          <button onClick={() => setToggle(true)}>
            <img src={addWhite} />
            Add New
          </button>
        </div>
      </div>
      {holdings.length > 0 ? (
        <>
          <p className="holdings-title">Your holdings</p>
          <div className="coinRowHolding header">
            <p className="coinRowHolding__image">Asset</p>
            <div className="coinRowHolding__name"></div>
            {/* <div className="coinRowHolding__image"></div> */}
            <div>
              <p>Amount</p>
            </div>
            <p className="coinRowHolding__text">Value in USD</p>
            <p className="coinRowHolding__text">Change % (24H)</p>
            <p className="coinRowHolding__text">Allocation</p>
          </div>
          {holdings.map((i) => (
            <CoinRowHolding
              name={i.coinInfo[0]?.name}
              id={i.coinInfo[0]?.id}
              key={i.coinInfo[0]?.id}
              rank={i.coinInfo[0]?.market_cap_rank}
              image={i.coinInfo[0]?.image}
              symbol={i.coinInfo[0]?.symbol}
              price={i.coinInfo[0]?.current_price}
              marketCap={i.coinInfo[0]?.market_cap}
              priceChange24={i.coinInfo[0]?.price_change_percentage_24h}
              quantity={i.quantity}
              buyPrice={i.price}
              balance={balance}
            />
          ))}
        </>
      ) : (
        <p>You don't have Cryptos in your portfolio</p>
      )}
      {toggle && <Modal coins={coins} setToggle={setToggle} />}
    </div>
  );
};

export default Wallet;
