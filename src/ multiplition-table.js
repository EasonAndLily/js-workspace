function createMultiplyTable(startNumber, endNumber) {
  if (startNumber > endNumber) {
    return null;
  }

  if (startNumber > 1000 || endNumber > 1000) {
    return "The input number can not more than 1000";
  }

  let resultStr = "";
  for (i = startNumber; i <= endNumber; i++) {
    for (j = startNumber; j <= i; j++) {
      resultStr += productExpression(j, i) + (j == i ? "\n" : " ");
    }
  }
  return resultStr;
}

function product(startNumber, endNumber) {
  return startNumber * endNumber;
}

function productExpression(startNumber, endNumber) {
  return startNumber + "*" + endNumber + "=" + product(startNumber, endNumber);
}

module.exports = createMultiplyTable;
