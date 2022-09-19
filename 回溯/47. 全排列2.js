/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
  let res = [];
  let path = [];
  nums.sort((a, b) => {
    return a - b;
  });
  const backtracking = (nums, k, used) => {
    if (path.length == k) {
      res.push([...path]);
    }
    for (let i = 0; i < k; i++) {
      if (i > 0 && nums[i] == nums[i - 1] && used[i - 1] == 1) continue;
      if (!used[i]) {
        used[i] = 1;
        path.push(nums[i]);
        backtracking(nums, k, used);
        path.pop();
        used[i] = 0;
      }
    }
  };
  backtracking(nums, nums.length, []);
  return res;
};
