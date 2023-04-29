function factorial(n) {
  let sum = 1;
  for (let i = 1; i <= n; i++) {
    sum = sum * i;
  }
  console.log("The factorial of",n,"is",sum);
}

factorial(10);
