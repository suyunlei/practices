/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function (nums) {
  if (nums.length < 2) {
    return false;
  }
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
  }
  // 每个背包的大小为sum/2
  if (sum % 2 !== 0) {
    return false;
  }
  let dp = new Array(sum / 2 + 1).fill(0);
  dp[0] = 0;
  for (let i = 0; i < nums.length; i++) {
    for (j = sum / 2; j >= nums[i]; j--) {
      dp[j] = Math.max(dp[j], dp[j - nums[i]] + nums[i]);
    }
  }
  if (dp[sum / 2] == sum / 2) return true;
  else return false;
};
function test() {
  console.log(canPartition([1, 2, 3, 5]));
}
test();
