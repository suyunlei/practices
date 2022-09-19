/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
  let n = nums.length;
  let [s, f] = [0, 0];
  let sum = 0;
  let res = Infinity;
  while (f < n) {
    sum += nums[f];
    while (sum >= target) {
      res = res > f - s + 1 ? f - s + 1 : res;
      sum -= nums[s];
      s++;
    }
    f++;
  }
  return res == Infinity ? 0 : res;
};
