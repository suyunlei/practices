/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let n = nums.length;
  let left = 0;
  let right = n - 1;
  while (left <= right) {
    let midIndex = left + Math.floor((right - left) / 2);
    let midVal = nums[midIndex];
    if (midVal == target) {
      return midIndex;
    }
    if (target > midVal) {
      left = midIndex + 1;
    }
    if (target < midVal) {
      right = midIndex - 1;
    }
  }
  return -1;
};
