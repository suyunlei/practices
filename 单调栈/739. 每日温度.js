/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (temperatures) {
  let n = temperatures.length;
  let result = new Array(n).fill(0);
  let stack = [0];
  for (let i = 1; i < n; i++) {
    if (temperatures[i] <= temperatures[stack[stack.length - 1]]) {
      stack.push(i);
    } else {
      while (temperatures[i] > temperatures[stack[stack.length - 1]]) {
        let pop = stack.pop();
        result[pop] = i - pop;
      }
      stack.push(i);
    }
  }
  return result;
};
dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]);
