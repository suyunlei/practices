var arr = "2 3 2 3 2".split(" ");
let res = 0;
for (let i = 0; i < arr.length; i++) {
  arr[i] = parseInt(arr[i]);
}
for (let i = 1; i < arr.length; i++) {
  while (arr[i] <= arr[i - 1]) {
    arr[i] = arr[i] * 2;
    res++;
  }
}
console.log(res);
