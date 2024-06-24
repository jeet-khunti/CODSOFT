function appendToDisplay(value) {
  const currentInput = document.forms["calculatorForm"].display.value;

  // Clear display if the previous input resulted in an error
  if (currentInput === "Error") {
    document.forms["calculatorForm"].display.value = "";
  }

  // Remove leading '0' only when typing the first digit
  if (currentInput === "0" && !"+-*/.%".includes(value)) {
    document.forms["calculatorForm"].display.value = value;
  } else {
    document.forms["calculatorForm"].display.value += value;
  }
}

function clearDisplay() {
  document.forms["calculatorForm"].display.value = "0";
}

function del() {
  const currentInput = document.forms["calculatorForm"].display.value;
  document.forms["calculatorForm"].display.value = currentInput.substring(
    0,
    currentInput.length - 1
  );
  if (
    currentInput.length == 1 ||
    currentInput == "Error" ||
    currentInput.includes("Infinity")
  ) {
    document.forms["calculatorForm"].display.value = "0";
  }
}

function calculateResult() {
  try {
    let expression = document.forms["calculatorForm"].display.value;

    // Directly evaluate arithmetic expressions using JavaScript
    const result = eval(expression);

    document.forms["calculatorForm"].display.value = result;
  } catch (error) {
    document.forms["calculatorForm"].display.value = "Error";
  }
}

function toggleSign() {
    const currentValue = document.forms['calculatorForm'].display.value;
    if (currentValue !== '0' && currentValue !== 'Error') {
        document.forms['calculatorForm'].display.value = (parseFloat(currentValue) * -1).toString();
    }
}
