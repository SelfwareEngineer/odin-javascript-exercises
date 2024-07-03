const palindromes = function (palindrome) {
  // Palindromes don't care about caps, word breaks, or punctuation
  const palindromeBlob = palindrome.toLowerCase().split(" ").join("");
  const filteredBlob = palindromeBlob
    .split("")
    .filter((i) => ![".", ",", "!", '"', "'", "?", "(", ")"].includes(i))
    .join("");
  console.log("forwards: ", filteredBlob);

  const reversedBlob = filteredBlob.split("").reverse().join("");
  console.log("backwards: ", reversedBlob);

  if (filteredBlob === reversedBlob) {
    return true;
  }
  return false;
};

// Do not edit below this line
module.exports = palindromes;
