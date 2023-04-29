function evenOdd(value) {
  if (value % 2 === 0) {
    return console.log("The provided value", value, "is Even.");
  } else {
    return console.log("The provided value", value, "is Odd.");
  }
}

// evenOdd(11);

function evenOdd2(value) {
  if (value % 2 === 0) {
    return true;
  } else {
    return false;
  }
}
let x = evenOdd2(20);
console.log("The value is even : ",x);