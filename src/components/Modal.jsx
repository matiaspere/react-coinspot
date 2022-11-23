import React from "react";
import GeneralContext from "../context/GeneralContext";
import { useState } from "react";
import { Autocomplete, TextField } from "@mui/material";
import "../styles/Modal.css";
import closeIcon from "../images/close.svg";

const Modal = ({ coins, setToggle }) => {
  const { holdings, setHoldings } = React.useContext(GeneralContext);
  const [options, setOptions] = useState([]);
  const [value, setValue] = React.useState(options[0]);
  const [inputValue, setInputValue] = React.useState("");
  const form = React.useRef(null);

  function getNames(data) {
    let arr = [];
    data.map((i) => {
      arr.push(i.name);
    });
    setOptions(arr);
  }

  React.useEffect(() => {
    getNames(coins);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(form.current);
    const coinName = inputValue;
    const coinInfo = coins.filter((i) => i.name === coinName);

    const data = {
      coinInfo: coinInfo,
      quantity: formData.get("quantity"),
      price: formData.get("price"),
    };
    const newHoldings = [...holdings];
    newHoldings.push(data);
    setHoldings(newHoldings);
    setToggle(false);
    localStorage.setItem("holdings", JSON.stringify(newHoldings));
  };

  return (
    <div className="Modal">
      <div className="Modal__template">
        <div className="Modal__template title">
          <p>Add Transaction</p>
          <img src={closeIcon} onClick={() => setToggle(false)} />
        </div>
        <form ref={form} onSubmit={handleSubmit}>
          <Autocomplete
            value={value}
            onChange={(_, newValue) => {
              setValue(newValue);
            }}
            inputValue={inputValue}
            onInputChange={(_, newInputValue) => {
              setInputValue(newInputValue);
            }}
            disablePortal
            id="combo-box-demo"
            options={options}
            sx={{ width: 400 }}
            renderInput={(params) => <TextField {...params} label="Coin " />}
          />
          <label className="formLabel" for="quantity">
            Quantity
          </label>
          <TextField
            name="quantity"
            id="quantity"
            variant="outlined"
            placeholder="0.00"
          />
          <label className="formLabel" for="price">
            Price per coin
          </label>
          <TextField
            name="price"
            id="price"
            variant="outlined"
            placeholder="$1000.00"
          />
          <button>Add Transaction</button>
        </form>
      </div>
    </div>
  );
};

export default Modal;
