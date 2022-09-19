/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  // dp存放在某一天买入，随后任意一天卖出的收获的利润的最大值。
  let low = Infinity;
  let res = 0;
  for (let i = 0; i < prices.length; i++) {
    // 贪心策略，取最相对靠左的最小值
    low = Math.min(low, prices[i]);
    // 贪心策略，取间隙最大的值
    res = Math.max(res, prices[i] - low);
  }
  return res;
};
