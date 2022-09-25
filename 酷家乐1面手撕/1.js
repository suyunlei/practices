var arr = [[1, 2, 3], 44, [5, [6, 7, 8]], [9, 10, 11, [[12], 13]]];
function func(arrData) {
  let res = [];
  const fc = function (arr) {
    if (Array.isArray(arr) == false) {
      res.push(arr);
      return;
    }
    for (let i = 0; i < arr.length; i++) {
      fc(arr[i]);
    }
  };
  fc(arrData);
  return res;
}
console.log(func(arr));
