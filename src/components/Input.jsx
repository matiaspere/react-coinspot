import React from "react";
import GeneralContext from "../context/GeneralContext";
import searchIcon from "../images/search.svg";
import "../styles/CoinRow.css";

const Input = () => {
  const { handleSearch } = React.useContext(GeneralContext);
  return (
    <div className="MainMarket__input">
      <img src={searchIcon} />
      <input placeholder="Search for a coin" onChange={handleSearch} />
    </div>
  );
};

export default Input;
