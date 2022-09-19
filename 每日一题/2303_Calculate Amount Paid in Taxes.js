// Calculate Amount Paid in Taxes
/**
 * @param {number[][]} brackets
 * @param {number} income
 * @return {number}
 */
var calculateTax = function (brackets, income) {
  let res = 0;
  if (income <= brackets[0][0]) {
    res = (income * brackets[0][1]) / 100;
  } else {
    let index = 0;
    for (let i = 0; i < brackets.length; i++) {
      if (income > brackets[i][0]) {
        index = index + 1;
      } else {
        break;
      }
    }
    for (let i = 0; i < index; i++) {
      if (i == 0) {
        res += (brackets[i][0] * brackets[i][1]) / 100;
      } else {
        res += ((brackets[i][0] - brackets[i - 1][0]) * brackets[i][1]) / 100;
      }
    }
    res += ((income - brackets[index - 1][0]) * brackets[index][1]) / 100;
  }

  return res.toFixed(5);
};
