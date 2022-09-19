// 最优解 - 递归 O logn
function times(x, n) {
  if (n == 0) {
    return 1;
  }
  let t = times(x, Math.floor(n / 2));
  if (n % 2 == 1) {
    return t * t * x;
  }
  return t * t;
}
