const fibonacci = function (num) {
  if (num < 0) {
    return "OOPS";
  }

  let operand1 = 0;
  let operand2 = 1;
  let total = 0;

  for (let i = 0; i < num; i++) {
    total = operand1 + operand2;
    operand1 = operand2;
    operand2 = total;
    console.log(`O1: ${operand1}, O2: ${operand2}, T: ${total}`);
  }

  return operand1;
};

// Do not edit below this line
module.exports = fibonacci;
