/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let result = -Infinity;
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    result = Math.max(sum, result);
    if (sum < 0) {
      sum = 0;
    }
  }
  return result;
};
