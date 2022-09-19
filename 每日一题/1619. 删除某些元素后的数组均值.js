/**
 * @param {number[]} arr
 * @return {number}
 */
var trimMean = function (arr) {
  let n = arr.length;
  let need_delete = n * 0.05;
  arr.sort((a, b) => {
    return a - b;
  });
  for (let i = 0; i < need_delete; i++) {
    arr.shift();
    arr.pop();
  }
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / (n - need_delete - need_delete);
};
