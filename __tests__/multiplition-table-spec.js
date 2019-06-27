const createMultiplyTable = require("../src/ multiplition-table.js");

it("The start number more than end number", () => {
  expect(createMultiplyTable(2, 1)).toBe(null);
});

it("The start number equal to the end number", () => {
  expect(createMultiplyTable(2, 2)).toBe("2*2=4\n");
});

it("The start number less than the end number", () => {
  expect(createMultiplyTable(2, 4)).toBe(
    "2*2=4\n2*3=6 3*3=9\n2*4=8 3*4=12 4*4=16\n"
  );
});

it("The start number and end number more than 1000", () => {
  expect(createMultiplyTable(1001, 1002)).toBe(
    "The input number can not more than 1000"
  );
});
