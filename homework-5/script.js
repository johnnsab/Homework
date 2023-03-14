// Given an array with elements of different types. Create a function that calculates the arithmetic mean of only the numerical elements of the given array.

function sumNumbers() {
  let data = prompt("Enter array").split(",");
  let sum = 0;
  for (let i = 0; i < data.length; i++) {
    let num = Number(data[i].trim());
    if (!isNaN(num)) {
      sum += num;
    }
  }
  return sum;
}

// Write the function doMath(x, znak, y), which receives 3 arguments: the numbers x and y, the string znak. The znak variable can be: +, -, *, /, %, ^ (degree).
// Output the result of the mathematical operation specified in the znak variable. Both numbers and the mathematical operator come from the user.

function doMath() {
  let x = Number(prompt("Enter first number"));
  let y = Number(prompt("Enter second number"));
  let znak = prompt("Enter mathematical operator");
  switch (znak) {
    case "+":
      return x + y;
      break;
    case "-":
      return x - y;
      break;
    case "*":
      return x * y;
      break;
    case "/":
      return x / y;
      break;
  }
}

// Write a function for filling a two-dimensional array with user data.
// The length of the main array and internal arrays is set by the user. The value of all elements of all arrays is set by the user.

function fillTwoDimensionalArray() {
  let masterArray = [];
  let masterArrayLength = prompt("Specify the main array length");

  for (let i = 0; i < masterArrayLength; i++) {
    let childArray = [];
    for (let j = 0; j < masterArrayLength; j++) {
      let inputValue = prompt(
        `Enter value for ${j + 1} child array in row ${i + 1}`
      );
      if (inputValue === null) {
        break;
      }
      let parsedValue = parseFloat(inputValue);
      if (!isNaN(parsedValue)) {
        childArray.push(parsedValue);
      }
    }
    masterArray.push(childArray);
  }

  return masterArray;
}

// Create a function that removes from the string all the characters that we passed with the second argument.
// 'func(" hello world", ['l', 'd'])' will return us "heo wor". The output string and characters to remove are specified by the user.

function removeCharsFromString() {
  let str = prompt("Enter string");
  let charsToRemove = prompt("Enter list of symbols").split(",");
  let result = "";
  for (let i = 0; i < str.length; i++) {
    if (!charsToRemove.includes(str[i])) {
      result += str[i];
    }
  }
  return result;
}
