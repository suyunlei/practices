// let n = parseInt(readline());
let n = 6;
// let nums = readline().split(" ");
let nums = [3, 2, 3, 1, 3, 2];
let count = 0;
for (let i = 0; i < n - 2; i++) {
  for (let j = i + 1; j < n - 1; j++) {
    for (let k = j + 1; k < n; k++) {
      if (nums[i] == nums[k] && nums[i] > nums[j]) {
        count++;
      }
    }
  }
}
console.log(count);
