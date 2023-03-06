let dataArray = [
  16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54,
  76, -4, 12, -35, 4, 47,
];

// Given array [16,-37,54,-4,72,-56,47,4,-16,25,-37,46,4,-51,27,-63,4,-54,76,- 4,12,-35,4,47] Find the sum and number of positive elements

function sumAndQuantityPositiveElements(numbers) {
  let sumOfdataArray = 0;
  let counter = 0;
  for (let i = 0; i < dataArray.length; i++) {
    if (numbers[i] > 0) {
      sumOfdataArray += numbers[i];
      counter++;
    }
  }
  return [sumOfdataArray, counter];
}
console.log(sumAndQuantityPositiveElements(dataArray));

// Find the minimum array element and its sequence number

function minimumArrayValue(numbers) {
  let minimumValue = numbers[0];
  let indexMinimumValueVariable;
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < minimumValue) {
      minimumValue = numbers[i];
    }
  }
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === minimumValue) {
      indexMinimumValueVariable = i;
    }
  }
  return [indexMinimumValueVariable, minimumValue];
}
console.log(minimumArrayValue(dataArray));

// Find the maximum array element and its sequence number

function maximumArrayValue(numbers) {
  let maximumValue = numbers[0];
  let indexMaximumValueVariable;
  for (let [index, element] of numbers.entries()) {
    if (element > maximumValue) {
      maximumValue = element;
      indexMaximumValueVariable = index;
    }
  }
  return [indexMaximumValueVariable, maximumValue];
}
console.log(maximumArrayValue(dataArray));

// Determine the number of negative elements

function numberArrayNegativeElements(numbers) {
  let negativeElementsArray = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < 0) {
      negativeElementsArray.push(numbers[i]);
    }
  }
  return negativeElementsArray.length;
}
console.log(numberArrayNegativeElements(dataArray));

// Find the number of odd positive elements

function numberArrayOddPositiveElements(numbers) {
  let oddPositiveElementsArray = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 0 && numbers[i] % 2 !== 0) {
      oddPositiveElementsArray.push(numbers[i]);
    }
  }
  return oddPositiveElementsArray.length;
}
console.log(numberArrayOddPositiveElements(dataArray));

// Find the number of even positive elements

function numberArrayEvenPositiveElements(numbers) {
  let evenPositiveElementsArray = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 0 && numbers[i] % 2 === 0) {
      evenPositiveElementsArray.push(numbers[i]);
    }
  }
  return evenPositiveElementsArray.length;
}
console.log(numberArrayEvenPositiveElements(dataArray));

// Find the sum of even positive elements

function sumArrayEvenPositiveElements(numbers) {
  let evenNumbersVariable = 0;
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 0 && numbers[i] % 2 === 0) {
      evenNumbersVariable += numbers[i];
    }
  }
  return evenNumbersVariable;
}
console.log(sumArrayEvenPositiveElements(dataArray));

// Find the sum of odd positive elements

function sumArrayOddPositiveElements(numbers) {
  let oddNumbersVariable = 0;
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 0 && numbers[i] % 2 !== 0) {
      oddNumbersVariable += numbers[i];
    }
  }
  return oddNumbersVariable;
}
console.log(sumArrayOddPositiveElements(dataArray));

// Find the product of positive elements

function multiplicationArrayPositiveElements(numbers) {
  let multiplicationValueVariable = 1;
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 0) {
      multiplicationValueVariable *= numbers[i];
    }
  }
  return multiplicationValueVariable;
}
console.log(multiplicationArrayPositiveElements(dataArray));

// Find the largest among the elements of the array, and set all others to zero

function maximumArrayValueAndResetting(numbers) {
  let maximumValue = numbers[0];
  let resultArray = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > maximumValue) {
      maximumValue = numbers[i];
    }
  }
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < maximumValue) {
      numbers[i] = 0;
      let convertToZeroValue = numbers[i];
      resultArray.push(convertToZeroValue);
    } else if (numbers[i] === maximumValue) {
      resultArray.push(numbers[i]);
    }
  }
  return resultArray;
}
console.log(maximumArrayValueAndResetting(dataArray));
