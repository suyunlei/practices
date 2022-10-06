/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  let map = {};
  let res = [];
  for (let str of strs) {
    let arr = Array.from(str);
    let t = arr.sort();
    if (map[t] == undefined) {
      map[t] = [str];
    } else {
      map[t].push(str);
    }
  }
  for (let key in map) {
    res.push(map[key]);
  }
  return res;
};
