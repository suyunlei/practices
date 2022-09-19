// 本题为考试多行输入输出规范示例，无需提交，不计分。
var readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false,
});

var n = -1; // 初始状态为负数，表示还没开始读取
var res = [];
var cur_line = 0;

// 输入： 第一行一个n 第二行一个数组
// 输出： 一个数组组成的字符串

// 题：每两个相邻的元素和/2 !== 0 的话，小红得一分
// 问小红能得最多分的时候，这个数组应该是怎么排列的。 给出一种情况即可
rl.on("line", function (line) {
  // javascript每行数据的回调接口
  if (n < 0) {
    // 测试用例第一行读取n
    n = parseInt(line.trim());
  } else {
    // 矩阵数据读取
    var arr = line.split(" ");
    res = new Array(2 * n + 1).fill(0);
    for (let i = 0; i < arr.length; i++) {
      arr[i] = parseInt(arr[i]);
    }
    let ji = [];
    let ou = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 == 1) {
        ji.push(arr[i]);
      } else {
        ou.push(arr[i]);
      }
    }

    for (let i = 0; i < ji.length; i++) {
      res[2 * i] = ji[i];
    }
    for (let i = 0; i < ou.length; i++) {
      res[2 * i + 1] = ou[i];
    }

    for (let i = 0; i < 2 * n + 1; i++) {
      if (res[i] === 0) {
        res.splice(i, 1);
        i--;
      }
    }
    // 记录当前读取的行数
    cur_line += 1;
  }

  // 读取行数结束，如果确定只有一行额外的数据输入，也可以通过cur_line === 1来判断
  if (cur_line === 1) {
    // 输出结果
    console.log(res.join(" "));
    // 重新初始化相关变量
    n = -1;
    ans = 0;
    cur_line = 0;
  }
});
