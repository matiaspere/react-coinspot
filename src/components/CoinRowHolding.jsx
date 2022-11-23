import React from "react";
import "../styles/CoinRowHolding.css";

const CoinRowHolding = (props) => {
  const ticker = props.symbol.toUpperCase();
  const percentage = props.priceChange24.toFixed(2);

  let classname;
  if (percentage < 0) {
    classname = "coinRow__text down"
  } else {
    classname = "coinRow__text up"
  }

  let value = props.quantity*props.price
  
  return (
    <div className="coinRowHolding">
      <div className="coinRowHolding__image">
        <img src={props.image} />
      </div>
      <div className="coinRowHolding__name">
        <p>{props.name}</p>
        <p>{ticker}</p>
      </div>
      <p className="coinRowHolding__text">{props.quantity}</p>
      <p className="coinRowHolding__text">{value}</p>
      <p className={classname}>{percentage}%</p>
      {/* <div className="coinRow__addIcon" ><img onClick={() => {props.setToggle(true)}} src={addIcon}/></div> */}
    </div>
  );
};

export default CoinRowHolding;