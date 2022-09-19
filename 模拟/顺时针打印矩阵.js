/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  if (matrix.length == 0) {
    return [];
  }
  let left = 0;
  let up = 0;
  let right = matrix[0].length - 1;
  let down = matrix.length - 1;
  let result = [];
  while (true) {
    for (let i = left; i <= right; i++) {
      result.push(matrix[up][i]);
    }
    up++;
    if (up > down) {
      break;
    }
    for (let i = up; i <= down; i++) {
      result.push(matrix[i][right]);
    }
    right--;
    if (right < left) {
      break;
    }
    for (let i = right; i >= left; i--) {
      result.push(matrix[down][i]);
    }
    down--;
    if (down < up) {
      break;
    }
    for (let i = down; i >= up; i--) {
      result.push(matrix[i][left]);
    }
    left++;
    if (left > right) {
      break;
    }
  }
  return result;
};
