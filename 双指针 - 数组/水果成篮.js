/**
 * @param {number[]} fruits
 * @return {number}
 */
var totalFruit = function (fruits) {
  let n = fruits.length;
  if (n <= 2) {
    return n;
  }
  let sec_first = 0; // 第三种水果出现时，第二种水果出现的起始位置
  let [s, f] = [0, 0];
  let basket = [fruits[s]];
  let res = 0;
  for (let i = 0; i < n; i++) {
    // 如果篮子中不存在当前水果
    if (!basket.includes(fruits[i])) {
      if (basket.length <= 1) {
        basket[1] = fruits[i];
        f++;
        sec_first++;
      } else {
        // 如果basket已经有两种水果，且遇到了第三种水果
        res = Math.max(f - s, res);
        s = sec_first + 1;
        basket[0] = fruits[i - 1];
        basket[1] = fruits[i];
      }
    }
    // 如果篮子中存在当前水果
    else {
      f++;
      res = f - s + 1;
      sec_first++;
    }
  }
  return res;
};
// console.log(totalFruit([3, 3, 3, 1, 2, 1, 1, 2, 3, 3, 4]));
