/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  let n = nums.length;
  for (let i = 0; i < n; i++) {
    if (nums[i] == val) {
      nums.splice(i, 1);
      // 移除以后i应该倒退一个 因为下标改变
      i = i - 1;
    }
  }
  return nums.length;
};
