const reverseString = function (str) {
  let splitString = str.split("");
  let reversedString = "";
  const splitStringLength = splitString.length;
  for (let i = 0; i < splitStringLength; i++) {
    reversedString += splitString.pop();
  }
  return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
