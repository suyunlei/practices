/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  if (nums.length == 1 && nums[0] == 0) {
    return;
  }
  let s = 0;
  let f = 1;
  while (f < nums.length) {
    if (nums[s] == 0 && nums[f] != 0) {
      let temp = nums[s];
      nums[s] = nums[f];
      nums[f] = temp;
      f++;
      s++;
    }
    if (nums[s] == 0 && nums[f] == 0) {
      f++;
    }
    if (nums[s] != 0) {
      f++;
      s++;
    }
  }
};
