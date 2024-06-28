const removeFromArray = function (arr, ...nums) {
  for (let num of nums) {
    for (let item of arr) {
      if (num === item) {
        arr = arr.filter((item) => item != num);
      }
    }
  }
  return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
