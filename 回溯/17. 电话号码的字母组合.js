/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  if (digits.length == 0) {
    return [];
  }
  let t = [];
  t = ["", "", "abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz"];
  let arr = [...digits];
  let res = [];
  let path = [];
  const dfs = (input, startIndex) => {
    if (path.length == input.length) {
      res.push(path.join(""));
      return;
    }
    let n = parseInt(input[startIndex]);
    for (let item of [...t[n]]) {
      path.push(item);
      dfs(input, startIndex + 1);
      path.pop();
    }
  };
  dfs(arr, 0);
  return res;
};
