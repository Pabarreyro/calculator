$(document).ready(function(event) {
  var add = function(number1, number2) {
	return number1 + number2;
  };

  var subtract = function(number1, number2) {
	return number1 - number2;
  };

  var multiply = function(number1, number2) {
  	return number1 * number2;
  };

  var divide = function(number1, number2) {
  	return number1 / number2;
  };

  event.preventDefault();
});




// var bmi = function(massLb, heightIn) {
//   return (massLb / heightIn**2) * 703;
// };
//
// var inputTempCelsius = parseInt(prompt("Enter the temperature in celsius: "));
// var inputTempFahrenheit = parseInt(prompt("Enter the temperature in fahrenheit: "));
//
// var celsiusToFahrenheit = function(tempCelsius) {
//   return ((9/5)*tempCelsius) + 32;
// };
//
// var fahrenheitToCelsius = function(tempFahrenheit) {
//   return (tempFahrenheit - 32)*(5/9);
// };
//
// alert("The result is " + celsiusToFahrenheit(inputTempCelsius).toFixed(1) + " degrees fahrenheit");
// alert("The result is " + fahrenheitToCelsius(inputTempFahrenheit).toFixed(1) + " degrees celsius");
