let arr = readline().split(" ");
let n = parseInt(arr[0]);
let k = parseInt(arr[1]);
let s = readline().split("");
for (let i = 0; i < k; i++) {
  s[i] = s[i].toUpperCase();
}
for (let i = k; i < n; i++) {
  s[i] = s[i].toLowerCase();
}
console.log(s.join(""));
