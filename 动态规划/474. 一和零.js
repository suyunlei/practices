/**
 * @param {string[]} strs
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var findMaxForm = function (strs, m, n) {
  let dp = new Array(m + 1).fill(0).map(() => {
    return new Array(n + 1).fill(0);
  });

  for (let str of strs) {
    let oneNum = 0;
    let zeroNum = 0;
    for (let i = 0; i < str.length; i++) {
      if (str[i] == "1") oneNum++;
      if (str[i] == "0") zeroNum++;
    }

    for (let i = m; i >= zeroNum; i--) {
      for (let j = n; j >= oneNum; j--) {
        dp[i][j] = Math.max(dp[i][j], dp[i - zeroNum][j - oneNum] + 1);
      }
    }
  }

  return dp[m][n];
};
