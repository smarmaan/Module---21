function leapYear(year) {
  if (year % 4 === 0) {
    if (year % 100 === 0) {
      if (year % 400 === 0) {
        console.log("This year", year, "is a leap year");
      } else {
        console.log("This year", year, "is not a leap year");
      }
    } else {
      console.log("This year", year, "is a leap year");
    }
  } else {
    console.log("This year", year, "is not a leap year");
  }
}

leapYear(2030);
