/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function (s, t) {
  /**
   *
   * @param {string} a
   */
  const getResult = (a) => {
    let res = [];
    for (let i = 0; i < a.length; i++) {
      if (a[i] != "#") {
        res.push(a[i]);
      } else {
        res.pop();
      }
    }
    return res.join("");
  };
  return getResult(s) == getResult(t);
};
