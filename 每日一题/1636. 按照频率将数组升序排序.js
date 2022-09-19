/**
 * @param {number[]} nums
 * @return {number[]}
 */
var frequencySort = function (nums) {
  let map = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (!map.has(nums[i])) {
      map.set(nums[i], 1);
    } else {
      map.set(nums[i], map.get(nums[i]) + 1);
    }
  }
  let arr = Array.from(map); //考察点，对map排序。其实就是将map转换成数组进行排序
  arr.sort((arrA, arrB) => {
    if (arrA[1] == arrB[1]) {
      return arrB[0] - arrA[0];
    } else {
      return arrA[1] - arrB[1];
    }
  });
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    let n = arr[i][1];
    while (n) {
      res.push(arr[i][0]);
      n--;
    }
  }
  return res;
};
