function factorial(n) {
  let sum = 1;
  let i = n;
  while (i >= 1) {
    sum = sum * i;
    i--;
  }

  return sum;
}

let n = 7;
let Factorial = factorial(n);
console.log("The Factorial of num ",n,"is", Factorial);
