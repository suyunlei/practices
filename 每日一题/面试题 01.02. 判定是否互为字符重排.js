/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var CheckPermutation = function (s1, s2) {
  let obj = {};
  for (let i = 0; i < s1.length; i++) {
    if (obj[s1[i]] == undefined) {
      obj[s1[i]] = 1;
    } else {
      obj[s1[i]] = obj[s1[i]] + 1;
    }
  }
  for (let i = 0; i < s2.length; i++) {
    if (obj[s2[i]] == undefined) {
      return false;
    }
    if (obj[s2[i]]) {
      obj[s2[i]] = obj[s2[i]] - 1;
    }
  }
  for (let i in obj) {
    if (obj[i] !== 0) {
      return false;
    } else {
      continue;
    }
  }
  return true;
};
