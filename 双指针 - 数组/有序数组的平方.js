/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
  let left = 0;
  let right = nums.length - 1;
  let res = new Array(nums.length);
  let n = nums.length - 1;
  while (left <= right) {
    let l = nums[left] * nums[left];
    let r = nums[right] * nums[right];
    if (l <= r) {
      res[n] = r;
      right--;
      r = nums[right] * nums[right];
    } else if (l > r) {
      res[n] = l;
      left++;
      l = nums[left] * nums[left];
    }
    n--;
  }
  return res;
  // 暴力排序 - 更快
  // let res = nums.map((n) => {
  //   return n * n;
  // });
  // res.sort((a, b) => {
  //   return a - b;
  // });
  // return res;
};
// console.log(sortedSquares([-4, -1, 0, 3, 10]));
