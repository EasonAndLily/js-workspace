const PostMachine = require("../src/pos-machine.js");

it("return a map of barcodes when input an array of barcodes", () => {
  expect(
    PostMachine.convertInputToMap(["0001", "0003", "0005", "0003"])
  ).toEqual(new Map([["0001", 1], ["0003", 2], ["0005", 1]]));
});

it("return object array of barcodes when input an map of barcodes", () => {
  expect(
    PostMachine.getBarcodeArrayObjects(
      new Map([["0001", 1], ["0003", 2], ["0005", 1]])
    )
  ).toEqual([
    { id: "0001", name: "Coca Cola", price: 3 },
    { id: "0003", name: "Pepsi-Cola", price: 5 },
    { id: "0005", name: "Dr Pepper", price: 7 }
  ]);
});

it("return report obj when input output object", () => {
  expect(
    PostMachine.covertToReport(
      [
        { id: "0001", name: "Coca Cola", price: 3 },
        { id: "0003", name: "Pepsi-Cola", price: 5 },
        { id: "0005", name: "Dr Pepper", price: 7 }
      ],
      new Map([["0001", 1], ["0003", 2], ["0005", 1]])
    )
  ).toEqual({
    receipts: [
      { name: "Coca Cola", price: 3, amount: 1 },
      { name: "Pepsi-Cola", price: 5, amount: 2 },
      { name: "Dr Pepper", price: 7, amount: 1 }
    ],
    totalPrice: 20
  });
});

it("print the report", () => {
  expect(
    PostMachine.printReport({
      receipts: [
        { name: "Coca Cola", price: 3, amount: 1 },
        { name: "Pepsi-Cola", price: 5, amount: 2 },
        { name: "Dr Pepper", price: 7, amount: 1 }
      ],
      totalPrice: 20
    })
  ).toBe(
    "Receipts\n------------------------------------------------------------\nCoca Cola                       3          1\nPepsi-Cola                       5          2\nDr Pepper                       7          1\n------------------------------------------------------------\nPrice: 20"
  );
});
