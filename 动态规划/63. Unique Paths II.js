/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function (obstacleGrid) {
  let m = obstacleGrid.length;
  let n = obstacleGrid[0].length;
  let dp = new Array(m).fill(0).map(() => {
    return new Array(n).fill(0);
  });
  debugger;
  // 初始化
  let index = 0;
  for (let i = 0; i < m; i++) {
    if (obstacleGrid[i][0] !== 1) {
      dp[i][0] = 1;
    } else {
      index = i;
      break;
    }
  }
  if (index !== 0) {
    for (let i = index; i < m; i++) {
      dp[i][0] = 0;
    }
  }

  let jindex = 0;
  for (let j = 0; j < n; j++) {
    if (obstacleGrid[0][j] !== 1) {
      dp[0][j] = 1;
    } else {
      jindex = j;
      break;
    }
  }
  if (jindex !== 0) {
    for (let j = jindex; j < n; j++) {
      dp[0][j] = 0;
    }
  }

  // 递推公式
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      if (obstacleGrid[i][j] !== 1) {
        dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
      } else {
        dp[i][j] = 0;
      }
    }
  }
  return dp[m - 1][n - 1];
};
console.log(
  uniquePathsWithObstacles([
    [0, 0, 0],
    [0, 1, 0],
    [0, 0, 0],
  ])
);
