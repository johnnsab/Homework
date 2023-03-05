// Output the numbers from 20 to 30 through the gap using a step of 0.5 (20 20.5 21 21.5….)

function listHalfStepNumbers(x, y) {
  let resultArray = [];
  for (let i = x; i <= y; i += 0.5) {
    resultArray.push(i);
  }
  return resultArray.join(" ");
}
console.log(listHalfStepNumbers(20, 30));

// One dollar is worth 27 hryvnias. Output data with the calculation of the cost of 10, 20, 30... 100 dollars

function listExchangeRateTable(x, y) {
  let resultArray = [];
  let price = 27;
  for (let i = x; i <= y; i += 10) {
    resultArray.push(i * price);
  }
  return resultArray.toString();
}
console.log(listExchangeRateTable(10, 100));

// This is an integer. Output all integers from 1 to 100 whose square does not exceed N numbers

function squaresList(x) {
  let resultArray = [];
  let squaresVariable = 0;
  for (let i = 1; i <= x; i++) {
    squaresVariable = i * i;
    if (squaresVariable <= x) {
      resultArray.push(squaresVariable);
    }
  }
  return resultArray.toString();
}
console.log(squaresList(100));

// This is an integer. Find out whether it is prime (prime is a number greater than 1 that has no divisors other than 1 and itself)

function checkPrimeNumber(x) {
  for (let i = 2; i < x; i++) {
    if (x % i === 0) {
      return false;
    }
  }
  return x > 1;
}
console.log(checkPrimeNumber(13));

// Given some number. Determine whether it is possible to obtain this number by reducing the number 3 to a certain power. (For example, the numbers 9, 81 can be obtained, and 13 cannot be obtained)

function isResultOfExponentiation(x, y) {
  let sum = 1;
  for (let i = 0; i <= x; i++) {
    sum *= y;
    if (x % y === 0 && sum === x) {
      return true;
    }
  }
  if (x % y !== 0 || sum !== x) {
    return false;
  }
}
console.log(isResultOfExponentiation(81, 3));
