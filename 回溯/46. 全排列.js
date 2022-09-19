/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  let res = [];
  let path = [];
  const backtracking = (nums, n, used) => {
    if (path.length == n) {
      res.push([...path]);
    }
    for (let i = 0; i < n; i++) {
      if (used[i]) continue;
      path.push(nums[i]);
      used[i] = 1;
      backtracking(nums, n, used);
      path.pop();
      used[i] = 0;
    }
  };
  backtracking(nums, nums.length, []);
  return res;
};
