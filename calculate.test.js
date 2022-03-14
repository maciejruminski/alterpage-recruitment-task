const { calculateByContext } = require("./calculate");

test("Summing up numbers", () => {
  const context = "sum";
  let numbers = [-5, 0, 5];
  let result = calculateByContext(context, numbers);
  let expectedResult = 0;

  expect(result).toBe(expectedResult);

  numbers = [22, 8, 0, 0, 20];
  result = calculateByContext(context, numbers);
  expectedResult = 50;

  expect(result).toBe(expectedResult);

  numbers = [-5, -10, -15];
  result = calculateByContext(context, numbers);
  expectedResult = -30;

  expect(result).toBe(expectedResult);
});

test("Subtracting numbers", () => {
  const context = "subtract";
  let numbers = [-5, 0, -5];
  let result = calculateByContext(context, numbers);
  let expectedResult = 0;

  expect(result).toBe(expectedResult);

  numbers = [0, 22, 8, 0, 0, 20];
  result = calculateByContext(context, numbers);
  expectedResult = -50;

  expect(result).toBe(expectedResult);

  numbers = [5, 10, 15];
  result = calculateByContext(context, numbers);
  expectedResult = -20;

  expect(result).toBe(expectedResult);

  numbers = [-5, -10, -10, -15];
  result = calculateByContext(context, numbers);
  expectedResult = 30;

  expect(result).toBe(expectedResult);
});

test("Multiplication of numbers", () => {
  const context = "multiply";
  let numbers = [-5, 0, -5, 23, 525];
  let result = calculateByContext(context, numbers);
  let expectedResult = 0;

  expect(result).toBe(expectedResult);

  numbers = [-5, 10];
  result = calculateByContext(context, numbers);
  expectedResult = -50;

  expect(result).toBe(expectedResult);

  numbers = [5, 10, 15];
  result = calculateByContext(context, numbers);
  expectedResult = 750;

  expect(result).toBe(expectedResult);

  numbers = [5, 10, -12, 1, 2, -1];
  result = calculateByContext(context, numbers);
  expectedResult = 1200;

  expect(result).toBe(expectedResult);

  // Two negative must be positive.
  numbers = [-23, -44];
  result = calculateByContext(context, numbers);
  expectedResult = result > 0;

  expect(expectedResult).toBeTruthy();
});

test("Error checking", () => {
  let context = "wrongContext";
  let numbers = [1, 2, 3];
  let expectedError = "Such context doesn't exist!";

  expect(() => calculateByContext(context, numbers)).toThrow(expectedError);

  context = "sum";
  numbers = 24;
  expectedError = "Numbers has to be an array!";

  expect(() => calculateByContext(context, numbers)).toThrow(expectedError);

  context = "sum";
  numbers = [];
  expectedError = "Numbers can't be empty!";

  expect(() => calculateByContext(context, numbers)).toThrow(expectedError);

  context = "sum";
  numbers = [
    [4, 7, 3, "string"],
    [4, 7, 3, undefined],
    [4, 7, 3, null],
    [4, 7, 3, NaN],
    [4, 7, 3, {}],
    [4, 7, 3, []],
  ];
  expectedError = "An array has to have only numbers!";

  numbers.forEach((numbersArr) => {
    expect(() => calculateByContext(context, numbersArr)).toThrow(
      expectedError
    );
  });
});
