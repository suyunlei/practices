/**
 * @param {number[]} nums
 * @return {number}
 * dp[i]表示i之前包括i的以nums[i]结尾最长上升子序列的长度
 */
var lengthOfLIS = function (nums) {
  let dp = new Array(nums.length).fill(1);
  let res = 1;
  for (let i = 1; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
    if (dp[i] > res) {
      res = dp[i];
    }
  }
  return res;
};
