"use strict";

const squaresBtns = document.querySelectorAll(".squares__btn");
const inputs = document.querySelectorAll(".form__input");
const output = document.querySelector(".form__output");

if (squaresBtns.length) {
  squaresBtns.forEach((square) =>
    square.addEventListener(
      "click",
      function () {
        const result = calculateByContext(
          this.dataset.context,
          getNumbersArray()
        );

        displayOutput(result);
      },
      false
    )
  );
}

function displayOutput(result) {
  output.value = result;
}

function getNumbersArray() {
  let inputValues = [];

  inputs.forEach((input) => inputValues.push(parseInt(input.value)));

  inputValues = inputValues.filter((number) => !Number.isNaN(number));

  return inputValues;
}

function sum(numbers) {
  return numbers.reduce((prev, current) => prev + current);
}

function subtract(numbers) {
  return numbers.reduce((prev, current) => prev - current);
}

function multiply(numbers) {
  return numbers.reduce((prev, current) => prev * current);
}

function calculateByContext(context, numbers) {
  const contextDoesntExist =
    context !== "sum" && context !== "subtract" && context !== "multiply";

  if (contextDoesntExist) {
    alert("Wrong input data.");
    throw new Error("Such context doesn't exist!");
  }

  const numbersIsNotAnArray = !Array.isArray(numbers);

  if (numbersIsNotAnArray) {
    alert("Wrong input data.");
    throw new Error("Numbers has to be an array!");
  }

  const numbersIsEmpty = numbers.length === 0;

  if (numbersIsEmpty) {
    alert("Wrong input data.");
    throw new Error("Numbers can't be empty!");
  }

  const dataTypeAreNotNumbers = numbers.some(
    (number) => typeof number !== "number" || Number.isNaN(number)
  );

  if (dataTypeAreNotNumbers) {
    alert("Wrong input data.");
    throw new Error("An array has to have only numbers!");
  }

  let result;

  switch (context) {
    case "sum":
      result = sum(numbers);
      break;
    case "subtract":
      result = subtract(numbers);
      break;
    case "multiply":
      result = multiply(numbers);
      break;
  }

  return result;
}

export { calculateByContext };
