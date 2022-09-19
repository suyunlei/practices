/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var findNumberIn2DArray = function (matrix, target) {
  if (matrix.length == 0) {
    return false;
  }
  const binarySearch = function (nums, target) {
    let low = 0;
    let high = nums.length - 1;
    while (low <= high) {
      let mid = low + Math.floor((high - low) / 2);
      if (nums[mid] < target) {
        low = mid + 1;
      } else if (nums[mid] > target) {
        high = mid - 1;
      } else if (nums[mid] == target) {
        return true;
      }
    }
  };
  for (let i = 0; i < matrix.length; i++) {
    if (binarySearch(matrix[i], target)) {
      return true;
    }
  }
  return false;
};

findNumberIn2DArray(
  [
    [1, 4, 7, 11, 15],
    [2, 5, 8, 12, 19],
    [3, 6, 9, 16, 22],
    [10, 13, 14, 17, 24],
    [18, 21, 23, 26, 30],
  ],
  5
);
