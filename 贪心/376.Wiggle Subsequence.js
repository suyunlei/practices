/**
 * @param {number[]} nums
 * @return {number}
 */
var wiggleMaxLength = function (nums) {
  let n = nums.length;
  if (n == 1) {
    return n;
  }
  let m_l = 1;
  let i = 0;
  let diff_prev = 0;
  let diff_now = 0;
  while (i < n - 1) {
    diff_now = nums[i + 1] - nums[i];
    if ((diff_now > 0 && diff_prev <= 0) || (diff_now < 0 && diff_prev >= 0)) {
      m_l++;
      diff_prev = diff_now;
    }
    i++;
  }
  return m_l;
};
// console.log(wiggleMaxLength([0, 0, 0]));
