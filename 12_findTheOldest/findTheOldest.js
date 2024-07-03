const findTheOldest = function (personObjArr) {
  let oldest = 0;
  let index;

  for (let i = 0; i < personObjArr.length; i++) {
    if (personObjArr[i].yearOfDeath) {
      endYear = personObjArr[i].yearOfDeath;
    } else {
      endYear = new Date().getFullYear();
    }

    const age = endYear - personObjArr[i].yearOfBirth;
    if (age > oldest) {
      oldest = age;
      index = i;
    }
  }

  return personObjArr[index];
};

// Do not edit below this line
module.exports = findTheOldest;
