function roundNumber(x, posiciones = 0) {
  let s = x.toString();
  let decimalLength = s.indexOf(".") + 1;
  let numStr = s.substr(0, decimalLength + posiciones);
  return Number(numStr);
}

export default roundNumber;

{
  /* <Autocomplete
            value={value}
            onChange={(_, newValue) => {
              setValue(newValue);
            }}
            inputValue={inputValue}
            onInputChange={(_, newInputValue) => {
              setInputValue(newInputValue);
            }}
            // disablePortal
            // id="combo-box-demo"
            options={options}
            sx={{ width: 400 }}
            renderInput={(params) => <TextField {...params} label="Coin " />}
          /> */
}
