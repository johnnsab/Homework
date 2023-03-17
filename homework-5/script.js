let arr = ["a", 2, { a: 1 }, ["a", "b"], 1, 9.3, "asdf", true, 8, null, 10];

// Given an array with elements of different types. Create a function that calculates the arithmetic mean of only the numerical elements of the given array.

function sumNumbers(data) {
  let count = 0;
  let averageNumber = data
    .filter(function (value) {
      if (typeof value === "number" && !isNaN(value)) {
        count++;
        return true;
      }
    })
    .reduce(function (sum, currentValue) {
      return sum + currentValue;
    }, 0);

  return averageNumber / count;
}
console.log(sumNumbers(arr));

// Write the function doMath(x, znak, y), which receives 3 arguments: the numbers x and y, the string znak. The znak variable can be: +, -, *, /, %, ^ (degree).
// Output the result of the mathematical operation specified in the znak variable. Both numbers and the mathematical operator come from the user.

function doMath() {
  let x = Number(prompt("Enter first number"));
  let y = Number(prompt("Enter second number"));
  if (!isNaN(x) || !isNaN(y)) {
    return alert("Incorrect type of entered value");
  }
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
    default:
      alert("Incorrect math operator");
  }
}

// Write a function for filling a two-dimensional array with user data.
// The length of the main array and internal arrays is set by the user. The value of all elements of all arrays is set by the user.

function fillTwoDimensionalArray() {
  let masterArray = [];
  let masterArrayLength = prompt("Specify the main array length");

  function fillTheChildArray(value) {
    let childArray = [];
    let childArrayLength = prompt(
      `Specify the ${value + 1} child array length`
    );
    let inputChildArray = prompt(
      `Enter values for ${value + 1} child array, separating them with a coma`
    ).split(",");
    if (Number(childArrayLength) === inputChildArray.length) {
      childArray.push(inputChildArray);
    }
    return childArray;
  }

  for (let i = 0; i < masterArrayLength; i++) {
    masterArray.push(fillTheChildArray(i));
  }
  alert(masterArray);
  return masterArray;
}

// Create a function that removes from the string all the characters that we passed with the second argument.
// 'func(" hello world", ['l', 'd'])' will return us "heo wor". The output string and characters to remove are specified by the user.

function removeCharsFromString(str, charsToRemove) {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    if (!charsToRemove.includes(str[i])) {
      result += str[i];
    }
  }
  return result;
}
console.log(removeCharsFromString(" hello world", ["l", "d"]));

// Implement a recursive function that exponentiates a number.
// The function accepts 2 arguments: the number to be raised to the power and the power. You cannot use Math.pow() or the ** operator.

function pow(num, degree) {
  if (degree === 0) {
    return 1;
  } else {
    return num * pow(num, degree - 1);
  }
}
console.log(pow(5, 4));
