function highAndLow(numbers) {
  numbers = numbers.split(" ");
  let low = parseInt(numbers[0]),
    high = parseInt(numbers[0]);
  for (let i = 0; i < numbers.length; i++) {
    let num = parseInt(numbers[i]);
    low = low <= num ? low : num;
    high = high >= num ? high : num;
  }
  return high + " " + low;
}

highAndLow("4 5 29 54 4 0 -214 542 -64 1 -3 6 -6");
