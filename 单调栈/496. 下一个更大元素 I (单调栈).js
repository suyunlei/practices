/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function (nums1, nums2) {
  let res = new Array(nums1.length).fill(-1);
  let map = new Map();
  let stack = [0];
  for (let i = 1; i < nums2.length; i++) {
    while (nums2[i] > nums2[stack[stack.length - 1]]) {
      let cur = stack.pop();
      map.set(nums2[cur], nums2[i]);
    }
    stack.push(i);
  }

  for (let i = 0; i < nums1.length; i++) {
    if (map.get(nums1[i])) {
      res[i] = map.get(nums1[i]);
    }
  }

  return res;
};
