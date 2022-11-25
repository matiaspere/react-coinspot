import React from "react";
import "../styles/CoinRowHolding.css";
import { LinearProgress } from "@mui/material";

const CoinRowHolding = (props) => {
  const ticker = props.symbol.toUpperCase();
  const percentage = props.priceChange24.toFixed(2);

  let classname;
  if (percentage < 0) {
    classname = "coinRow__text down";
  } else {
    classname = "coinRow__text up";
  }

  let valueUsd = 0;
  for (let k = 0; k < props.quantity.length; k++) {
    valueUsd = valueUsd + props.quantity[k] * props.price;
  }
  let totalQuantity = 0;
  for (let j = 0; j < props.quantity.length; j++) {
    totalQuantity = totalQuantity + parseFloat(props.quantity[j]);
  }

  return (
    <div className="coinRowHolding">
      <div className="coinRowHolding__image">
        <img src={props.image} />
      </div>
      <div className="coinRowHolding__name">
        <p>{props.name}</p>
        <p>{ticker}</p>
      </div>
      <p >{totalQuantity}</p>
      <p className="coinRowHolding__text">${valueUsd.toFixed(2)}</p>
      <p className={classname}>{percentage}%</p>
      <div>
        <LinearProgress
          variant="determinate"
          value={(valueUsd / props.balance) * 100}
        />
      </div>
    </div>
  );
};

export default CoinRowHolding;
