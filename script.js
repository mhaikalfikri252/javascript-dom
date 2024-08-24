function fizzBuzz(number) {
  if (number % 3 === 0 && number % 5 === 0) {
    return "FizzBuzz";
  } else if (number % 3 === 0) {
    return "Fizz";
  } else if (number % 5 === 0) {
    return "Buzz";
  } else {
    return number;
  }
}

// Event listener for the button click
document
  .getElementById("calculateButton")
  .addEventListener("click", function () {
    // Get the input values
    const input1 = parseInt(document.getElementById("input1").value);
    const input2 = parseInt(document.getElementById("input2").value);

    // Calculate the sum
    const sum = input1 + input2;

    // Determine the FizzBuzz result
    const result = fizzBuzz(sum);

    // Display the result
    document.getElementById("result").textContent = result;
  });
