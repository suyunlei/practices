/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
  const Count = (string) => {
    let m = new Map();
    for (let i of [...string]) {
      if (m.get(i)) {
        m.set(i, m.get(i) + 1);
      } else {
        m.set(i, 1);
      }
    }
    return m;
  };

  // 统计ransomNote的每个字符的个数
  // 统计magazine中每个字符的个数
  let rMap = Count(ransomNote);
  let mMap = Count(magazine);

  for (let [key, value] of rMap) {
    if (mMap.get(key) && mMap.get(key) >= value) {
      continue;
    } else {
      return false;
    }
  }

  return true;
};
