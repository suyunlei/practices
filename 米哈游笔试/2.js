// 本题为考试多行输入输出规范示例，无需提交，不计分。
var readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false,
});

// 最小子串中包含k个mihoyo，求最小字串的left和right
var n = -1; // 初始状态为负数，表示还没开始读取
var k = 0;
let ans = -1;
let end = -1;
var cur_line = 0;
rl.on("line", function (line) {
  // javascript每行数据的回调接口
  if (n < 0) {
    // 测试用例第一行读取n
    n = parseInt(line.split(" ")[0]);
    k = parseInt(line.split(" ")[1]);
  } else {
    // 矩阵数据读取
    let s = line;
    let a = [];
    let min_len = s.length;
    for (let i = 0; i < s.length - 5; i++) {
      if (
        s[i] == "m" &&
        s[i + 1] == "i" &&
        s[i + 2] == "h" &&
        s[i + 3] == "o" &&
        s[i + 4] == "y" &&
        s[i + 5] == "o"
      ) {
        a.push(i);
      }
    }
    for (let i = 0; i < a.length - k + 1; i++) {
      if (a[i + k - 1] - a[i] < min_len) {
        ans = a[i];
        end = a[i + k - 1] + 5;
        min_len = a[i + k - 1] - a[i];
      }
    }

    // 记录当前读取的行数
    cur_line += 1;
  }

  // 读取行数结束，如果确定只有一行额外的数据输入，也可以通过cur_line === 1来判断
  if (cur_line == 1) {
    // 输出结果
    console.log(ans + " " + end);
    // 重新初始化相关变量
    n = -1;
    ans = 0;
    cur_line = 0;
  }
});
