// 本题为考试多行输入输出规范示例，无需提交，不计分。
const { parse } = require("path");
var readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false,
});

var n = -1; // 初始状态为负数，表示还没开始读取
var res = 0;
var cur_line = 0;
rl.on("line", function (line) {
  // javascript每行数据的回调接口
  if (n < 0) {
    // 测试用例第一行读取n
    n = parseInt(line.trim());
  } else {
    // 矩阵数据读取
    var arr = line.split(" ");
    for (let i = 0; i < arr.length; i++) {
      arr[i] = parseInt(arr[i]);
    }
    for (let i = 1; i < arr.length; i++) {
      while (arr[i] <= arr[i - 1]) {
        arr[i] = arr[i] * 2;
        res++;
      }
    }
    // 记录当前读取的行数
    cur_line += 1;
  }

  // 读取行数结束，如果确定只有一行额外的数据输入，也可以通过cur_line === 1来判断
  if (cur_line === 1) {
    // 输出结果
    console.log(res);
    // 重新初始化相关变量
    n = -1;
    ans = 0;
    cur_line = 0;
  }
});
