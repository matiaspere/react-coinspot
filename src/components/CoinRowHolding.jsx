import React from "react";
import "../styles/CoinRowHolding.css";
import { LinearProgress } from "@mui/material";

const CoinRowHolding = (props) => {
  const ticker = props.symbol.toUpperCase();

  let valueUsd = 0;
  let totalQuantity = 0;
  let totalInvested = 0;
  for (let k = 0; k < props.quantity.length; k++) {
    valueUsd = valueUsd + props.quantity[k] * props.price;
    totalQuantity = totalQuantity + parseFloat(props.quantity[k]);
    totalInvested =
      totalInvested +
      parseFloat(props.quantity[k]) * parseFloat(props.buyPrice);
  }

  let percentage = ((valueUsd / totalInvested) * 100).toFixed(2);
  let classname;
  if (percentage < 100) {
    classname = "coinRow__text down";
  } else {
    classname = "coinRow__text up";
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
      <p>{totalQuantity}</p>
      <p className="coinRowHolding__text">${valueUsd.toFixed(2)}</p>
      <p className={classname}>
        {percentage < 100 ? `-${100 - percentage}` : `${percentage - 100}`}%
      </p>
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
