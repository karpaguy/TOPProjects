const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(numbers) {
	return numbers.reduce( (accum, num) => accum += num, 0);
};

const multiply = function(numbers) {
	return numbers.reduce( (accum, num) => accum *= num);
};

const power = function(num, power) {
	return Math.pow(num, power);
};

const factorial = function(num) {
  let result = 1;
	for (let i = num; i > 0; i--) {
    result *= i;
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
