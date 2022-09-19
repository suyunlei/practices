/**
 *
 * @param {number []} weight
 * @param {number []} value
 * @param {number} size
 */
function bagWeight(weight, value, size) {
  // 定义dp数组
  let dp = new Array(weight.length).fill().map(() => {
    return new Array(size + 1).fill(0);
  });
  // 初始化
  for (let j = weight[0]; j <= size; j++) {
    dp[0][j] = value[0];
  }

  for (let i = 1; i < weight.length; i++) {
    //遍历物品
    for (let j = 0; j <= size; j++) {
      //遍历背包容量
      if (j < weight[i]) {
        dp[i][j] = dp[i - 1][j];
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i - 1][j - weight[i]] + value[i]);
      }
    }
  }

  return dp[weight.length - 1][size];
}

// 一维数组实现
/**
 *
 * @param {number[]} weight
 * @param {number[]} value
 * @param {number} size
 */
function bagWeight2(weight, value, size) {
  // 定义dp数组
  let dp = new Array(size + 1).fill(0);
  // dp数组初始化
  dp[0] = 0;
  for (let i = 0; i < weight.length; i++) {
    for (let j = size; j >= weight[i]; j--) {
      dp[j] = Math.max(dp[j], dp[j - weight[i]] + value[i]);
    }
  }
  return dp[size];
}
