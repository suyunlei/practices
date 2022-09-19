/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;
  if (target < nums[0]) {
    return 0;
  }
  if (target > nums[right]) {
    return right + 1;
  }
  let pos;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    let midVal = nums[mid];
    if (target > midVal) {
      left = mid + 1;
    } else {
      // 比中间值小其实就是挤掉中间值的位置
      pos = mid;
      right = mid - 1;
    }
  }
  return pos;
};
console.log(searchInsert([1, 3, 5, 6], 5));
