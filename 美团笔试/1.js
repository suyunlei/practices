let T = parseInt(readline());
// let T = 3;
while (T > 0) {
  let arr = readline().split(" ");
  arr.map((a) => {
    return parseInt(a);
  });
  // let arr = [5,3,3,3];
  let n = arr[0];
  let x = arr[1];
  let y = arr[2];
  let k = arr[3];

  let a = k / x; // 小美的时间
  let b = (n - k + 1) / y; // 朋友的时间
  if (a == b) {
    console.log("Tie");
  }
  if (a < b) {
    console.log("Win");
  }
  if (a > b) {
    console.log("Lose");
  }
  T = T - 1;
}
