// 1. Write a function that takes in an array of numbers and returns its sum.

function sumOfNumbers(numbers) {
  var result = 0;
  for (var i = 0; i < numbers.length; i++) {
    result += numbers[i];
  }
  return result;
}
console.log(sumOfNumbers([1, 2, 3, 5, 8]));