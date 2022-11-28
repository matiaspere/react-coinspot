import React from "react";
import axios from "axios";
import "../styles/CoinInfo.css";
import { Line } from "react-chartjs-2";
import { Bar } from "react-chartjs-2";
import { CategoryScale } from "chart.js";
import { Chart as ChartJS } from "chart.js/auto";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import GeneralContext from "../context/GeneralContext";
import SelectButton from "../components/SelectButton";
import back from "../images/back.svg";
import down from "../images/down.svg";
import up from "../images/up.svg";

const CoinInfo = () => {
  const { totalCoins } = React.useContext(GeneralContext);
  const { id } = useParams();
  const [historicData, setHistoricData] = React.useState();
  const [days, setDays] = React.useState(1);

  const chartDays = [
    {
      label: "24H",
      value: 1,
    },
    {
      label: "1M",
      value: 30,
    },
    {
      label: "3M",
      value: 90,
    },
    {
      label: "1Y",
      value: 365,
    },
  ];

  const fetchHistoricData = async () => {
    const { data } = await axios.get(
      `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=${days}`
    );
    setHistoricData(data.prices);
  };

  React.useEffect(() => {
    fetchHistoricData();
  }, [days]);

  const coin = totalCoins.filter((i) => i.id === id);
  console.log(coin);
  return (
    <div className="CoinInfo">
      <div className="CoinInfo__header">
        <Link to="/">
          <img src={back} />
        </Link>
        <img src={coin[0]?.image} />
        <div>
          <p>{coin[0]?.name}</p>
          <p>{coin[0]?.symbol.toUpperCase()}/USD</p>
        </div>
      </div>
      <div className="CoinIfo__price">
        <div>
          <p className="CoinInfo__price-price">${coin[0]?.current_price}</p>
          <div
            className={
              coin[0]?.price_change_percentage_24h > 0
                ? "percentage_up"
                : "percentage_down"
            }
          >
            <img src={coin[0]?.price_change_percentage_24h > 0 ? up : down} />
            <p>{coin[0]?.price_change_percentage_24h.toFixed(2)}% (24h)</p>
          </div>
        </div>
        <div>
          {chartDays.map((day) => (
            <SelectButton
            key={day.value}
              onClick={() => {
                setDays(day.value);
              }}
              selected={day.value === days}
            >
              {day.label}
            </SelectButton>
          ))}
        </div>
      </div>
      <Line
        data={{
          labels: historicData?.map((coin) => {
            let date = new Date(coin[0]);
            return date.toLocaleDateString();
          }),
          datasets: [
            {
              data: historicData?.map((coin) => coin[1]),
              label: `Price past ${days} days`,
              borderColor: "#5676F6",
            },
          ],
        }}
        options={{
          elements: {
            point: {
              radius: 1,
            },
          },
        }}
      />
      <div className="CoinInfo__footer">
        <div>
          <p>Market Cap</p>
          <p>${(coin[0]?.market_cap / 1000000000).toFixed(1)}B</p>
        </div>
        <div>
          <p>Volume (24h)</p>
          <p>${(coin[0]?.total_volume / 1000000).toFixed(1)}M</p>
        </div>
        <div>
          <p>Circulating Supply</p>
          <p>
            {(coin[0]?.circulating_supply / 1000000).toFixed(1)}M{" "}
            {coin[0]?.symbol.toUpperCase()}{" "}
            <span>
              %
              {(
                (coin[0]?.circulating_supply / coin[0]?.total_supply) *
                100
              ).toFixed(0)}{" "}
              of total supply
            </span>
          </p>
        </div>
        <div>
          <p>All Time High</p>
          <p>${coin[0]?.ath}</p>
        </div>
      </div>
    </div>
  );
};

export default CoinInfo;
