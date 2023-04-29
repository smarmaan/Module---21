function OddSum(arrayOfNumbers) {
  let sum = 0;
  let OddArray = [];
  for (let i = 0; i < arrayOfNumbers.length; i++) {
    const numbers = arrayOfNumbers[i];
    if (numbers % 2 !== 0) {
      OddArray.push(numbers);
      sum = sum + numbers;
    }
  }
  console.log(OddArray);

  return sum;
}

let num_array = [5, 7, 8, 10, 45, 30, 81, 95, 90];

let sumOfOdd = OddSum(num_array);
console.log("Sum of all ODD numbers of Array : ", sumOfOdd);
