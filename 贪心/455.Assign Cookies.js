/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function (g, s) {
  //先排序
  g.sort((a, b) => a - b);
  s.sort((a, b) => a - b);
  let children_l = g.length;
  let cookie_l = s.length;
  let res = 0;
  let index = cookie_l - 1; //index指向饼干的最后一位
  for (let i = children_l - 1; i >= 0; i--) {
    if (s[index] >= g[i]) {
      res++;
      index--;
    } else {
      // index不移动
    }
  }
  return res;
};
