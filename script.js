// FizzBuzz function
function fizzBuzz(number) {
  if (number === 0) {
    return "0";
  } else {
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
}

// Event listener for the button click
document
  .getElementById("calculateButton")
  .addEventListener("click", function () {
    const input1 = parseInt(document.getElementById("input1").value);
    const input2 = parseInt(document.getElementById("input2").value);
    const inputForm = document.getElementById("inputForm");
    const listResult = document.getElementById("listResult");
    const output = document.createElement("p");

    // Calculate the sum
    const sum = input1 + input2;

    // Determine the FizzBuzz result
    const result = fizzBuzz(sum);

    if (
      !isNaN(input1) &&
      !isNaN(input2) &&
      input1 !== "" &&
      input2 !== "" &&
      result !== "0"
    ) {
      output.textContent = `Result : ${input1} + ${input2} = ${result}`;
      listResult.appendChild(output);
      inputForm.reset();
    } else {
      alert("Please enter valid numbers.");
    }
  });
