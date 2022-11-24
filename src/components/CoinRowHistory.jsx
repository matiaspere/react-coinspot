import React from "react";
import "../styles/CoinRowHolding.css";

const CoinRowHistory = (props) => {
  const ticker = props.symbol.toUpperCase();

  
  return (
    <div className="coinRowHistory">
      <div className="coinRowHolding__image">
        <img src={props.image} />
      </div>
      <div className="coinRowHolding__name">
        <p>{props.name}</p>
        <p>{ticker}</p>
      </div>
      <p className="coinRowHolding__text">{props.quantity}</p>
      <p className="coinRowHolding__text">${props.buyPrice}</p>
      {/* <div className="coinRow__addIcon" ><img onClick={() => {props.setToggle(true)}} src={addIcon}/></div> */}
    </div>
  );
};

export default CoinRowHistory;