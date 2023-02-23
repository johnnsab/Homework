// Display the numbers from 10 to 20 on the page in one line separated by commas

function number () {
    let numberArray = [];
    for (i = 1; i <= 20; i++) {    
      numberArray.push(i);
    }
    return numberArray
  }

// Print the squares of numbers from 10 to 20

  function number () {
    let numberSquare = [];
    for (i = 10; i <= 20; i++) {        
      numberSquare.push(i*i);
    }
    return numberSquare
  }

//   Display the multiplication table by 7

function number () {
    const number = 7
    let numberSquare = [];
    for (i = 1; i <= 9; i++) {        
      numberSquare.push(i*number);
    }
    return numberSquare
  }

//   Find the sum of all integers from 1 to 15

function number () {
    let sum = 0;  
    for (i = 1; i <= 15; i++) {        
      sum += i;    
    }
    return sum
  }

//   Find the product of all integers from 15 to 35

function number () {
    let sum = 1;  
    for (i = 15; i <= 35; i++) {            
      sum *= i;    
    }
    return sum
  }

//   Find the arithmetic mean of all integers from 1 to 500

function number () {
    let sum = 0;  
    for (i = 1; i <= 500; i++) {            
      sum += i;
    }
    return sum / i;
  }

//   Output the sum of only even numbers in the range from 30 to 80

function number () {  
    sum = 0;
    for (i = 30; i <= 80; i++) {            
      if (i % 2 === 0) {
        console.log(i)
        sum += i;  
      } 
    }
    return sum;
  }

//   Output all numbers in the range from 100 to 200 multiples of 3

function number () {  
    let resultArray = [];
    for (i = 100; i <= 200; i++) {            
      if (i % 3 === 0) {
        console.log(i)
        resultArray.push(i)
      } 
    }
    return resultArray
  }

//   A natural number is given. Find and display all its divisors on the page

function divisors (number) {    
    let resultArray = [];
    for (i = 0; i <= number; i++) {                
      if (number % i === 0) {      
        resultArray.push(i)
      } 
    }
    return resultArray
  }

//   Determine the number of its even divisors

function divisors (number) {    
    let resultArray = [];
    for (i = 0; i <= number; i++) {                
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

function divisors (number) {      
    let sum = 0;
    for (i = 0; i <= number; i++) {                
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
    let sumArray = [];
    for (i = 1; i <= 9; i++) {
      sumArray.push(number * i)
    }
    return sumArray
  }