/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function (num) {
  // for(let i=1;i<=Math.ceil(num/2);i++){
  //     if(i*i==num){
  //         return true
  //     }
  // }
  // return false;
  let left = 1;
  let right = num;
  while (left <= right) {
    let mid = left + Math.floor((right - left) / 2);
    if (mid * mid == num) {
      return true;
    }
    if (mid * mid > num) {
      right = mid - 1;
    }
    if (mid * mid < num) {
      left = mid + 1;
    }
  }
  return false;
};
