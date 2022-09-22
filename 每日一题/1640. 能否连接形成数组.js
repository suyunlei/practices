/**
 * @param {number[]} arr
 * @param {number[][]} pieces
 * @return {boolean}
 */
var canFormArray = function (arr, pieces) {
  let map = new Map();
  for (let i = 0; i < pieces.length; i++) {
    map.set(pieces[i][0], i);
  }
  for (let i = 0; i < arr.length; ) {
    if (!map.has(arr[i])) {
      return false;
    }
    let j = map.get(arr[i]);
    for (let k = 1; k < pieces[j].length; k++) {
      if (arr[i + k] !== pieces[j][k]) {
        return false;
      }
    }
    i = i + pieces[j].length;
  }
  return true;
};
