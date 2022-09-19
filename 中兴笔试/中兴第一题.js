/**
 * 有一个智能手机，用二进制存储时间，上下两行
 * 上面4位是时，下面6位是分
 * 如果是1 即为亮着的
 * 当两者n个的时候，输出所有可能的时间
 * 位运算
 *
 * @param {number} n
 * @return string
 */

function binaryTime(n) {
  let res = [];
  // a存小时
  // a存0-11 二进制后各有几个1
  let a = new Array(12).fill(0);
  for (let i = 0; i < 12; i++) {
    let t = 0;
    j = i;
    while (j) {
      j = j & (j - 1); // 每次取 & ， j的二进制就会少一个1
      t += 1;
    }
    a[i] = t;
  }

  // b存分钟
  // b存有二进制有i个1时候，存在的值的所有可能
  let b = new Array(6).fill(0).map(() => {
    return [];
  });
  for (let i = 0; i < 60; i++) {
    let j = i;
    let t = 0;
    while (j) {
      j = j & (j - 1);
      t += 1;
    }
    b[t].push(i);
  }

  for (let i = 0; i < a.length; i++) {
    let t = n - a[i];
    if (t < 0 || t > 6) {
      continue;
    } else {
      b[t].forEach((item) => {
        if (item < 10) {
          res.push(`${i}:0${item}`);
        } else {
          res.push(`${i}:${item}`);
        }
      });
    }
  }

  return `[${res}]`;
}
console.log(binaryTime(5));
