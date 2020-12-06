// 1. Write a function that takes in an array of numbers and returns its sum.

function sumOfNumbers(numbers) {
  var result = 0;
  for (var i = 0; i < numbers.length; i++) {
    result += numbers[i];
  }
  return result;
}
console.log(sumOfNumbers([1, 2, 3, 5, 8]));

// 2. Write a function that takes in an array of strings and returns the smallest string.

function smallestString(strings) {
  var result = strings[0];
  for (var i = 0; i < strings.length; i++) {
    if (strings[i].length < result.length) {
      result = strings[i];
    }
    return result;
  }
}

console.log(smallestString(["hi", "hello", "hey", "bonjour"]));

// 3. Write a function that takes in an array of numbers and returns a new array with the numbers in reverse order.

function reversedNumbers(numbers) {
  var result = [];
  for (var i = numbers.length - 1; i >= 0; i--) {
    result.push(numbers[i]);
  }
  return result;
}

console.log(reversedNumbers([1, 2, 3, 4, 5]));