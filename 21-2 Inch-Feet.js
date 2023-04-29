function inchToFeet(inch) {
  console.log("The provided height in inchs : ", inch);

  feet = inch / 12;
  return feet;
}

let dadaInch = inchToFeet(30);
console.log("The converted height in feets is : ", dadaInch);

let MariaInch = inchToFeet(10);
console.log("The converted height in feets is : ", MariaInch);

function mileToKm(mile) {
  console.log("The provided mile is : ", mile);
  sum = mile * 1.60934;
  return sum;
}

let km = mileToKm(2)
console.log("The conversion of mile to km is : ", km);
