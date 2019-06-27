const data = [
  { id: "0001", name: "Coca Cola", price: 3 },
  { id: "0002", name: "Diet Coke", price: 4 },
  { id: "0003", name: "Pepsi-Cola", price: 5 },
  { id: "0004", name: "Mountain Dew", price: 6 },
  { id: "0005", name: "Dr Pepper", price: 7 },
  { id: "0006", name: "Sprite", price: 8 },
  { id: "0007", name: "Diet Pepsi", price: 9 },
  { id: "0008", name: "Diet Mountain Dew", price: 10 },
  { id: "0009", name: "Diet Dr Pepper", price: 11 },
  { id: "0010", name: "Fanta", price: 12 }
];

function convertInputToMap(barcodeArray) {
  let barcodeMap = new Map();
  barcodeArray.forEach((element) => {
    let value = barcodeMap.get(element) ? barcodeMap.get(element) + 1 : 1;
    barcodeMap.set(element, value);
  });
  return barcodeMap;
}

function getBarcodeArrayObjects(barcodeMap) {
  return Array.from(barcodeMap.keys()).map((id) => {
    return data.filter((obj) => obj.id == id)[0];
  });
}

function covertToReport(barcodeArrayObjects, barcodeMap) {
  let receipts = barcodeArrayObjects.map((obj) => {
    return {
      name: obj.name,
      price: obj.price,
      amount: barcodeMap.get(obj.id)
    };
  });

  let totalPrice = receipts.reduce((accumulator, receipt) => {
    return accumulator + receipt.price * receipt.amount;
  }, 0);

  return {
    receipts: receipts,
    totalPrice: totalPrice
  };
}

function printReport(report) {
  let result =
    "Receipts\n------------------------------------------------------------\n";
  report.receipts.forEach((receipt) => {
    result =
      result +
      receipt.name +
      "                       " +
      receipt.price +
      "          " +
      receipt.amount +
      "\n";
  });

  result =
    result + "------------------------------------------------------------\n";
  result = result + "Price: " + report.totalPrice;
  return result;
}

function printReceipt(barcodesArray) {
  let barcodeMap = convertInputToMap(barcodesArray);
  let barcodeArrayObjects = getBarcodeArrayObjects(barcodeMap);
  let report = covertToReport(barcodeArrayObjects, barcodeMap);
  let result = printReport(report);
  console.log(result);
}

module.exports = {
  getBarcodeArrayObjects,
  convertInputToMap,
  covertToReport,
  printReport
};
