/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  let dp = new Array(nums.length + 1).fill(0);
  dp[1] = nums[0];
  dp[2] = nums[1];
  for (let i = 3; i <= nums.length; i++) {
    for (let j = i - 2; j >= 1; j--) {
      dp[i] = Math.max(dp[i], dp[j] + nums[i - 1]);
    }
  }
  let max = 0;
  for (let i = 1; i <= dp.length; i++) {
    if (max < dp[i]) {
      max = dp[i];
    }
  }
  return max;
};
