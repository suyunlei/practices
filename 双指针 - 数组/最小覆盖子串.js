/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
  let mapT = new Map();
  let res = "";
  for (let i = 0; i < t.length; i++) {
    if (!mapT.has(t[i])) {
      mapT.set(t[i], 1);
    } else {
      let n = mapT.get(t[i]);
      mapT.set(t[i], n + 1);
    }
  }

  let [l, r] = [0, 0];
  let type = mapT.size;
  while (r < s.length) {
    if (mapT.has(s[r])) {
      mapT.set(s[r], mapT.get(s[r]) - 1);
      if (mapT.get(s[r]) == 0) {
        type--;
      }
    }
    // 当全覆盖后，移动左指针
    while (type == 0) {
      let temp = s.substring(l, r + 1); //左闭右开
      if (!res || res.length > temp.length) {
        res = temp;
      }
      if (mapT.has(s[l])) {
        mapT.set(s[l], mapT.get(s[l]) + 1);
        if (mapT.get(s[l]) == 1) {
          type++;
        }
      }
      l++;
    }
    r++;
  }
  return res;
};

// let s = "a";
// let t = "aa";
// console.log(minWindow(s, t));
