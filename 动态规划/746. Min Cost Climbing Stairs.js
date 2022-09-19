/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function (cost) {
  let dp = [];
  let n = cost.length;
  dp[0] = cost[0];
  dp[1] = cost[1];
  // 虚拟了一个顶层
  cost[n] = 0;
  // 此时cost.length改变了 比原来多了1
  for (let i = 2; i <= n; i++) {
    dp[i] = Math.min(dp[i - 1], dp[i - 2]) + cost[i];
  }
  return dp[n];
};
