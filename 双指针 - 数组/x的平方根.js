/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
  if (x == 0) {
    return 0;
  }
  let left = 1;
  let right = x;
  while (left <= right) {
    let mid = left + Math.floor((right - left) / 2);
    if (mid * mid == x) {
      return mid;
    }
    if (mid * mid > x) {
      right = mid - 1;
    }
    if (mid * mid < x) {
      left = mid + 1;
    }
  }
  return right;
};
