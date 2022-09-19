/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  const findLeft = (nums, target) => {
    let left = 0;
    let right = nums.length - 1;
    let leftBorder = -999;
    while (left <= right) {
      let mid = left + Math.floor((right - left) / 2);
      if (target <= nums[mid]) {
        right = mid - 1;
        leftBorder = right;
      } else {
        left = mid + 1;
      }
    }
    return leftBorder;
  };
  const findRight = (nums, target) => {
    let left = 0;
    let right = nums.length - 1;
    let rightBorder = -999;
    while (left <= right) {
      let mid = left + Math.floor((right - left) / 2);
      if (target >= nums[mid]) {
        left = mid + 1;
        rightBorder = left;
      } else {
        right = mid - 1;
      }
    }
    return rightBorder;
  };
  let l = findLeft(nums, target);
  let r = findRight(nums, target);
  if (l == -999 || r == -999) {
    return [-1, -1];
  }
  if (r - l > 1) {
    return [l + 1, r - 1];
  }
  return [-1, -1];
};
// console.log(searchRange([5, 7, 7, 8, 8, 10], 8));
