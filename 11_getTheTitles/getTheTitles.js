const getTheTitles = function (bookObjArr) {
  return bookObjArr.reduce((acc, i) => acc.concat(i.title), []);
};

// Do not edit below this line
module.exports = getTheTitles;
