// 0,1,8旋转后是自己
// 2, 5互为镜像， 6, 9 互为镜像
// 其他都不是
/**
 * @param {number} n
 * @return {number}
 */
var rotatedDigits = function (n) {
  const fn = function (num) {
    let check = {
      0: 0,
      1: 1,
      8: 8,
      2: 5,
      5: 2,
      6: 9,
      9: 6,
    };
    let res = false;
    while (num) {
      let n = num % 10;
      if (check[n] == undefined) {
        res = false;
        return res;
      } else if (check[n] !== n) {
        res = true;
      }
      num = Math.floor(num / 10);
    }
    return res;
  };
  let count = 0;
  for (let i = 1; i <= n; i++) {
    if (fn(i) == true) {
      count++;
    }
  }
  return count;
};
