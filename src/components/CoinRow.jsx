import React from "react";
import { Sparklines, SparklinesLine } from "react-sparklines";
import { Link } from "react-router-dom";
import "../styles/CoinRow.css";
import starOutlined from "../images/StarOutlined.svg";
import starFilled from "../images/StarFilled.svg";
import GeneralContext from "../context/GeneralContext";
import useFetchHistoricalData from "../hooks/useFetchHistoricalData";

const CoinRow = (props) => {
  const { addToWatchlist, watchlist, setWatchlist } =
    React.useContext(GeneralContext);
  const ticker = props.symbol.toUpperCase();
  const percentage = props.priceChange24.toFixed(2);
  const historicData = useFetchHistoricalData(props.id, 7);

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
  let route = `/coin/${props.id}`;

  const dataSparklines = historicData?.map((coin) => coin[1]);
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
      <p className="coinRow__text">${props.price.toLocaleString()}</p>
      <p className={classname}>{percentage}%</p>
      <p className="coinRow__text">${props.marketCap.toLocaleString()}</p>
      <div>
        <Sparklines data={dataSparklines}>
          <SparklinesLine color="#5676F6" />
        </Sparklines>
      </div>
    </div>
  );
};

export default CoinRow;
