const ftoc = function(value) {
  const first = value - 32;
  const second = first * 5 / 9;
  const rounded = Math.round(second * 10) / 10;

  return rounded
};

const ctof = function(value) {
  const first = value * 9 / 5 + 32
  const rounded = Math.round(first * 10) / 10;

  return rounded
};

//abc

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
