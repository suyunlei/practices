let y = 1;
let res = 0;
let arr = [];
if (y == 0) {
  console.log(1);
  console.log(0);
} else {
  for (let i = 1; i <= 64; i++) {
    if (y % i == 0) {
      let x = y / i;
      let count = 0;
      let t = x;
      while (t) {
        t = t & (t - 1);
        count++;
      }
      if (count == i) {
        res++;
        arr.push(x);
      }
    }
  }
  arr.sort((a, b) => {
    return a - b;
  });
  console.log(res);
  console.log(arr.join(" "));
}
