const sumAll = function (start, end) {
  if (
    start < 0 ||
    end < 0 ||
    typeof start !== "number" ||
    typeof end !== "number"
  ) {
    return "ERROR";
  }

  // Apparently this needs to be sanitized in case the user is a goober
  // and puts the big number first. Who does that?
  if (start > end) {
    let temp = end;
    end = start;
    start = temp;
  }

  let total = 0;
  let numRange = getRange(start, end);

  for (num of numRange) {
    total += num;
  }
  return total;
};

// Javascript has no built in range() function like Python, so I just built one
const getRange = function (start, end) {
  let nums = [];

  for (let i = start; i <= end; i++) {
    nums.push(i);
  }

  return nums;
};

// Do not edit below this line
module.exports = sumAll;
