let n = parseInt(readline());
// let n = 3;
let res = new Array(n);
for (let i = 0; i < n; i++) {
  res[i] = new Array(n);
}
let i = 0;
for (let i = 0; i < n; i++) {
  // debugger;
  if (i % 2 == 0) {
    for (let j = 0; j < n; j++) {
      res[i][j] = i * n + j + 1;
    }
    l;
  } else {
    for (let j = 0; j < n; j++) {
      res[i][j] = i * n + n - j;
    }
  }
}
for (let i = 0; i < n; i++) {
  console.log(res[i].join(" "));
}
// console.log(res);
