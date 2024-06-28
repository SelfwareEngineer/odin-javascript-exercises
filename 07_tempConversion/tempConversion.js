const convertToCelsius = function (fahrenheit) {
  fahrenheit -= 32;
  fahrenheit *= 5 / 9;
  const celsius = fahrenheit; // to avoid confusion

  return roundToOneDecimal(celsius);
};

const convertToFahrenheit = function (celsius) {
  celsius *= 9 / 5;
  celsius += 32;
  const fahrenheit = celsius; // to avoid confusion

  return roundToOneDecimal(fahrenheit);
};

const roundToOneDecimal = (float) => {
  float *= 10;
  float = Math.round(float);
  float /= 10;

  return float;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
