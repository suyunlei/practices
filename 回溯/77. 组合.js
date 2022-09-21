/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
  let res = [];
  let path = [];
  const dfs = (n, k, startIndex) => {
    if (path.length == k) {
      res.push([...path]);
      return;
    }
    for (let i = startIndex; i <= n - (k - path.length) + 1; i++) {
      path.push(i);
      dfs(n, k, i + 1);
      path.pop();
    }
  };
  dfs(n, k, 1);
  return res;
};
