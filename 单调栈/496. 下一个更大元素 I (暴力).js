/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function (nums1, nums2) {
  let res = new Array(nums1.length).fill(-1);
  for (let i = 0; i < nums1.length; i++) {
    let cur = nums1[i];
    for (let j = 0; j < nums2.length; j++) {
      if (cur == nums2[j] && j <= nums2.length - 2) {
        for (let z = j + 1; z < nums2.length; z++) {
          if (nums2[z] > cur) {
            res[i] = nums2[z];
            break;
          }
        }
      }
    }
  }
  return res;
};
