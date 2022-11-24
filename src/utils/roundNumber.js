function roundNumber(x, posiciones = 0) {
  let s = x.toString();
  console.log(x)
  let l = s.length;
  let decimalLength = s.indexOf(".") + 1;
  let numStr = s.substr(0, decimalLength + posiciones);
  return Number(numStr);
}

export default roundNumber;
