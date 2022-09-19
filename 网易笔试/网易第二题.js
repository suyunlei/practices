let n = parseInt(readline());
// let n = 6;
let input = readline();
// let input = "6 1 1 4 5 1 4";
let inputArr = input.split(" ");
for (let i = 0; i < inputArr.length; i++) {
  inputArr[i] = parseInt(inputArr[i]);
}
let m_1 = 0;
let t_1 = 0;
let m_2 = 0;
let t_2 = 0;
for (let i = 0; i < n; i = i + 2) {
  if (inputArr[i] > m_1) {
    m_1 = inputArr[i];
  }
  t_1 += inputArr[i];
}
for (let i = 1; i < n; i = i + 2) {
  if (inputArr[i] > m_2) {
    m_2 = inputArr[i];
  }
  t_2 += inputArr[i];
}
let ans = m_1 * Math.floor((n + 1) / 2) + m_2 * Math.floor(n / 2) - t_1 - t_2;
if (m_1 == m_2) {
  ans += Math.floor(n / 2);
}
console.log(ans);
