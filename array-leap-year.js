function findLeapYear(array) {
  let leapYearArray = [];
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    if (element % 4 === 0) {
      if (element % 100 === 0) {
        if (element % 400 === 0) {
          leapYearArray.push(element);
        }
      } else {
        leapYearArray.push(element);
      }
    }
  }

  return console.log(leapYearArray);
}

let years = [2023, 2024, 2025, 2028, 2030, 2032, 2020];

findLeapYear(years);
