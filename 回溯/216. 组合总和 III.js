/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function (k, n) {
  let res = [];
  let path = [];
  const dfs = (k, n, startIndex) => {
    if (path.length == k) {
      let sum = path.reduce((a, b) => {
        return a + b;
      });
      if (sum == n) {
        res.push([...path]);
      }
      return;
    }
    for (let i = startIndex; i <= 9; i++) {
      path.push(i);
      dfs(k, n, i + 1);
      path.pop();
    }
  };
  dfs(k, n, 1);
  return res;
};
