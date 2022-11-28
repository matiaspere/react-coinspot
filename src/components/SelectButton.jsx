import React from "react";
import "../styles/CoinInfo.css";

const SelectButton = ({ onClick, selected, children }) => {
  const classname = selected ? "SelectButton--selected" : "SelectButton";
  return (
    <button className={classname} onClick={onClick}>
      {children}
    </button>
  );
};

export default SelectButton;
