/**
 * @param {number[]} nums
 * @return {boolean}
 */
var PredictTheWinner = function (nums) {
  // 个数为偶数个的时候，先手必胜 （只需要比奇数和大还是偶数和大）
  if (nums.length % 2 == 0) {
    return true;
  }
  // 个数为奇数个的时候,求每一次拿赢得的值
  const max = (i, j) => {
    //计算赢面 最终的赢面为正数，则可以获胜
    if (i == j) {
      return nums[i];
    }
    let s1 = nums[i] - max(i + 1, j); // 我们的赢面-上一个人最大的赢面
    let s2 = nums[j] - max(i, j - 1);
    return Math.max(s1, s2); // 选一个大的赢面
  };
  return max(0, nums.length - 1) >= 0;
};
