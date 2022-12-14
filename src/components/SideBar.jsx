import React from "react";
import { Link } from "react-router-dom";
import GeneralContext from "../context/GeneralContext";
import "../styles/SideBar.css";
import candles from "../images/candles.svg";
import wallet from "../images/wallet.svg";
import star from "../images/halfStar.svg";
import money from "../images/money.svg";
import history from "../images/history.svg";
import logo2 from '../images/logo2.svg';

const SideBar = () => {
  const { balance } = React.useContext(GeneralContext);


  return (
    <div className="SideBar">
      <div className="SideBar__current">
        {/* <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/MetaMask_Fox.svg/800px-MetaMask_Fox.svg.png" /> */}
        <img src={logo2}/>
        <div>
          <p>Balance</p>
          <p>${balance}</p>
        </div>
      </div>
      <div className="SideBar__link">
        <img src={candles} />
        <Link to="/">
          <p>Market</p>
        </Link>
      </div>

      <div className="SideBar__link">
        <img src={star} />
        <Link to="/watchlist">
          <p>Watchlist</p>
        </Link>
      </div>
      <div className="SideBar__link">
        <img src={wallet} />
        <Link to="/wallet">
          <p>Wallet</p>
        </Link>
      </div>
      <div className="SideBar__link">
        <img src={history} />
        <Link to="history">
          <p>History</p>
        </Link>
      </div>
    </div>
  );
};

export default SideBar;
