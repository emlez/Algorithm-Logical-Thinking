// Exercise 1: Write a recursive function for a timer that every 5 minutes adds 10 more minutes to its total count.
function timer(minutes) {
  let timeLeft = minutes + 5;
  console.log(timeLeft);
  if (minutes < 60) {
    let minutes = timeLeft + 10;
    console.log(minutes);
    timer(minutes);
  } else {
    console.log("It's over.");
  }
}

timer(0);

// Exercise 2: Write a recursive function to find the largest number in an array.

// Exercise 3: Write a recursive function to convert the first and last characters of a string from lowercase to uppercase.

// Exercise 4: Write a recursive function to write the Fibonacci series up to its tenth iteration.

// Exercise 5: Write a recursive function to generate a random password with 20 characters combining letters-numbers-symbols-numbers-letters-day-new-year.
