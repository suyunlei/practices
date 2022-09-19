/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeightII = function (stones) {
  let sum = 0;
  for (let i = 0; i < stones.length; i++) {
    sum += stones[i];
  }
  let n = Math.floor(sum / 2);
  let dp = new Array(n + 1).fill(0);
  dp[0] = 0;

  for (let i = 0; i < stones.length; i++) {
    for (let j = n; j >= stones[i]; j--) {
      dp[j] = Math.max(dp[j], dp[j - stones[i]] + stones[i]);
    }
  }

  let a = dp[n];
  let b = sum - dp[n];
  return b - a;
};
