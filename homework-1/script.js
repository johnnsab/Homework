// Display the numbers from 10 to 20 on the page in one line separated by commas

function listNumbers (x, y) {
    let numberArray = [];
    for (let i = x; i <= y; i++) {    
      numberArray.push(i);
    }
    return numberArray.toString()
  }

// Print the squares of numbers from 10 to 20

  function listNumbersSquare (x, y) {
    let numberSquare = [];
    for (let i = x; i <= y; i++) {        
      numberSquare.push(i*i);
    }
    return numberSquare.toString()
  }

//   Display the multiplication table by 7

function numberMultiplication (number) {
  let stringSum = '';     
  for (let i = 1; i <= 10; i++) {       
    stringSum += `${i} * ${number} = ${i * number}\n`;            
  } 
  return stringSum;
}

//   Find the sum of all integers from 1 to 15

function listSumInteger (x, y) {
    let sum = 0;  
    for (let i = x; i <= y; i++) {        
      sum += i;    
    }
    return sum
  }

//   Find the product of all integers from 15 to 35

function listMultiplication (x, y) {
    let sum = 1;  
    for (let i = x; i <= y; i++) {            
      sum *= i;    
    }
    return sum
  }

//   Find the arithmetic mean of all integers from 1 to 500

function averageNumber (x, y) {
    let sum = 0;  
    for (let i = x; i <= y; i++) {            
      sum += i;
    }
    return sum / i;
  }

//   Output the sum of only even numbers in the range from 30 to 80

function sumEvenNumbers (x, y) {  
    sum = 0;
    for (let i = x; i <= y; i++) {            
      if (i % 2 === 0) {
        console.log(i)
        sum += i;  
      } 
    }
    return sum;
  }

//   Output all numbers in the range from 100 to 200 multiples of 3

function divisorByThree (x, y) {  
    let resultArray = [];
    for (let i = x; i <= y; i++) {            
      if (i % 3 === 0) {
        console.log(i)
        resultArray.push(i)
      } 
    }
    return resultArray.toString()
  }

//   A natural number is given. Find and display all its divisors on the page

function allDivisors (number) {    
    let resultArray = [];
    for (let i = 0; i <= number; i++) {                
      if (number % i === 0) {      
        resultArray.push(i)
      } 
    }
    return resultArray
  }

//   Determine the number of its even divisors

function amountDivisors (number) {    
    let resultArray = [];
    for (let i = 0; i <= number; i++) {                
      if (number % i === 0) {      
        let sum = i;
        if (sum % 2 === 0) {
          resultArray.push(i)  
        }      
      } 
    }
    return resultArray.length
  }

//   Find the sum of its even divisors

function sumDivisors (number) {      
    let sum = 0;
    for (let i = 0; i <= number; i++) {                
      if (number % i === 0) {      
        let result = i;
        if (result % 2 === 0) {
          sum += i;
        }      
      } 
    }
    return sum
  }

//   Print the complete multiplication table from 1 to 10

function multiplicationTable (number) {
  let resultArray = [];
  function numberMultiplication (j) {      
    let stringSum = '';
    for (let i = 1; i <= 10; i++) {       
      stringSum += `${i} * ${j} = ${i * j}\n`;            
    }
    return stringSum
  }
  for (let i = 1; i <= number; i++) {
    resultArray.push(numberMultiplication(i))
  }
  return resultArray
}