/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  const a = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  const b = {
    IV: 4,
    IX: 9,
    XL: 40,
    XC: 90,
    CD: 400,
    CM: 900,
  };
  let l = 0;
  let r = 1;
  let res = 0;
  while (l < s.length) {
    let cur = s[l] + s[r];
    if (b[cur]) {
      res += b[cur];
      l += 2;
      r += 2;
    } else {
      res += a[s[l]];
      r++;
      l++;
    }
  }
  return res;
};
console.log(romanToInt("MCMXCIV"));
