let n = parseInt(readline());
let arr = readline().split(" ");
// let n = 6;
// let arr = [1, 1, 4, 5, 1, 4];
for (let i = 0; i < arr.length; i++) {
  arr[i] = parseInt(arr[i]);
}
let map_1 = new Map();
let map_2 = new Map();
// 奇数
for (let i = 0; i < n; i = i + 2) {
  if (!map_1.has(arr[i])) {
    map_1.set(arr[i], 1);
  } else {
    map_1.set(arr[i], map_1.get(arr[i]) + 1);
  }
}
// 偶数
for (let i = 1; i < n; i = i + 2) {
  if (!map_2.has(arr[i])) {
    map_2.set(arr[i], 1);
  } else {
    map_2.set(arr[i], map_2.get(arr[i]) + 1);
  }
}
let max_ji = 0;
let sum_ji = 0;
let max_ou = 0;
let sum_ou = 0;
let aji = [];
let aou = [];
for (let [key, val] of map_1) {
  sum_ji += val;
  aji.push(val);
  let v = val;
  if (v > max_ji) {
    max_ji = v;
  }
}
for (let [key, val] of map_2) {
  aou.push(val);
  sum_ou += val;
  let v = val;
  if (v > max_ou) {
    max_ou = v;
  }
}
aji.sort((a, b) => {
  return a - b;
});
aou.sort((a, b) => {
  return a - b;
});
let k1 = 0;
let k2 = 0;
for (let [key, val] of map_1) {
  if (val == max_ji) {
    k1 = key;
  }
}
for (let [key, val] of map_2) {
  if (val == max_ou) {
    k2 = key;
  }
}
if (k1 == k2) {
  if (max_ji - aji[aji.length - 2] < max_ou - aou[aou.length - 2]) {
    max_ji = aji[aji.length - 2];
  } else {
    max_ou = aou[aou.length - 2];
  }
}
console.log(sum_ji - max_ji + sum_ou - max_ou);
