import React from "react";
import axios from "axios";

const useFetchHistoricalData = (id, days) => {
  const [historicData, setHistoricData] = React.useState();

  const fetchHistoricData = async () => {
    const { data } = await axios.get(
      `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=${days}`
    );
    setHistoricData(data.prices);
  };

  React.useEffect(() => {
    fetchHistoricData(id, days);
  }, [days]);

  return historicData;
};

export default useFetchHistoricalData;
