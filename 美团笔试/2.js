let n = parseInt(read_line());
let p = read_line().split(" ");
let w = read_line().split(" ");
for (let i = 0; i < p.length; i++) {
  p[i] = parseInt(p[i]);
}
for (let i = 0; i < p.length; i++) {
  w[i] = parseInt(w[i]);
}

// dp表示到达第i个房间能获得的最大的价值。
let dp = new Array(p[p.length - 1]).fill(0);
if (p[0] !== 1) {
  dp[1] = 0;
}
if (p[0] == 1) {
  dp[1] = p[0];
}

// 其实遍历p就可以 不需要遍历每一个房间
for (let i = 2; i <= p[p.length - 1]; i++) {
  let index = -3;
  let add = 0;
  for (let j = 0; j < p.length; j++) {
    if (p[j] == i) {
      index = j;
    }
  }
  if (index == -3) {
    add = 0;
  } else {
    add = w[index];
  }
  // i表示第几个房间
  if (i % 2 == 0) {
    dp[i] = dp[i / 2] + add;
  } else {
    dp[i] = dp[(i - 1) / 2] + add;
  }
}

let res = 0;
for (let i = 0; i < dp.length; i++) {
  if (dp[i] > res) {
    res = dp[i];
  }
}
console.log(res);
