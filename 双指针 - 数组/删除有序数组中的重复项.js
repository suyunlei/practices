/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let [s, f] = [0, 1];
  while (f < nums.length) {
    // 这样数组前面的值就都为不同的值
    if (nums[f] != nums[s]) {
      nums[s + 1] = nums[f];
      f++;
      s++;
    } else {
      f++;
    }
  }
  return s + 1;
};
