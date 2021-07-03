function secondLargestNumber(numbers) {
  console.log(numbers);
  numbers.sort(function (a, b) {
    return b - a;
  });

  return numbers[1];
}

let nums = [1, 56, 2, 345, 88, 32, 100, 8];
console.log(secondLargestNumber(nums));
