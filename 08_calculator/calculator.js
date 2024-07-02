const add = function (...nums) {
  return nums.reduce((acc, i) => acc + i);
};

const subtract = function (...nums) {
  return nums.reduce((acc, i) => acc - i);
};

const sum = function (numsArr) {
  return numsArr.reduce((acc, i) => acc + i, 0);
};

const multiply = function (numsArr) {
  return numsArr.reduce((acc, i) => acc * i);
};

const power = function (...nums) {
  return nums.reduce((acc, i) => acc ** i);
};

const factorial = function (num) {
  let total = 1;
  for (let i = 1; i <= num; i++) {
    total *= i;
  }
  return total;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
