// let n = read_line();
// let arr = read_line().split(" ");
// let k = parseInt(read_line());
// let karr = read_line().split(" ");
// for (let i = 0; i < arr.length; i++) {
//   arr[i] = parseInt(arr[i]);
// }
// for (let i = 0; i < arr.length; i++) {
//   karr[i] = parseInt(karr[i]);
// }

/**
 *
 * @param {number[]} A
 * @param {number[]} B
 */

A = [1, 9, 2, 8, 3, 7, 4, 6, 5];
B = [3, 7];
const helper = (A, B) => {
  if (B.length <= 0) {
    return A;
  }
  let C = B.shift();
  let left = [];
  let right = [];
  let mid = 0;
  for (let i = 0; i < A.length; i++) {
    if (A[i] < C) {
      left.push(A[i]);
    } else if (A[i] > C) {
      right.push(A[i]);
    } else if (A[i] == C) {
      mid = A[i];
    }
  }
  let bleft = [];
  let bright = [];
  let bmid = 0;
  // 只是比b0大的切点是在后面个数组上起作用的
  for (let i = 0; i < B.length; i++) {
    if (B[i] < C) {
      bleft.push(B[i]);
    } else if (B[i] > C) {
      bright.push(B[i]);
    } else if (B[i] == C) {
      bmid = B[i];
    }
  }
  if (mid != 0) {
    return helper(left, bleft).concat(mid, helper(right, bright));
  } else {
    return helper(left, bleft).concat(helper(right, bright));
  }
};
let s = helper(A, B).join(" ");
console.log(s);
