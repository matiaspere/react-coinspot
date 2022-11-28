import React from "react";
import { Link } from "react-router-dom";
import "../styles/CoinRow.css";
import starOutlined from "../images/StarOutlined.svg";
import starFilled from "../images/StarFilled.svg";
import GeneralContext from "../context/GeneralContext";
import addIcon from "../images/add.svg";

const CoinRow = (props) => {
  const { addToWatchlist, watchlist, setWatchlist } =
    React.useContext(GeneralContext);
  const ticker = props.symbol.toUpperCase();
  const percentage = props.priceChange24.toFixed(2);

  let classname;
  if (percentage < 0) {
    classname = "coinRow__text down";
  } else {
    classname = "coinRow__text up";
  }
  React.useEffect(() => {
    const data = localStorage.getItem("watchlist");
    if (data) {
      const data2 = JSON.parse(data);
      setWatchlist(data2);
    }
  }, []);

  let exists = watchlist.some((i) => i.name === props.name);
  let image = exists ? starFilled : starOutlined;
  let route = `/coin/${props.id}`

  return (
    <div className="coinRow">
      <img
        src={image}
        className="coinRow__favorite"
        onClick={() => addToWatchlist(props.id)}
      />
      <p>{props.rank}</p>
      <div className="coinRow__image">
        <Link to={route}>
          <img src={props.image} />
        </Link>
      </div>
      <div className="coinRow__name">
        <p>{props.name}</p>
        <p>{ticker}</p>
      </div>
      <p className="coinRow__text">${props.price}</p>
      <p className={classname}>{percentage}%</p>
      <p className="coinRow__text">${props.marketCap}</p>
    </div>
  );
};

export default CoinRow;
