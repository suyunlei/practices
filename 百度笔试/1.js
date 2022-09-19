// 本题为考试单行多行输入输出规范示例，无需提交，不计分。
// 本题为考试单行多行输入输出规范示例，无需提交，不计分。
// let line = readline();
let line = "baiduoxiaojiabankanjiaran";
const yuanyin = ["a", "e", "i", "o", "u"];
let count = 0;
for (let i = 0; i < line.length - 3; i++) {
  let a = yuanyin.includes(line[i + 1]);
  let b = yuanyin.includes(line[i + 2]);
  let c = yuanyin.includes(line[i + 4]);
  let d = !yuanyin.includes(line[i]);
  let e = !yuanyin.includes(line[i + 3]);

  let check =
    line[i] == line[i + 1] ||
    line[i] == line[i + 2] ||
    line[i] == line[i + 3] ||
    line[i] == line[i + 4] ||
    line[i + 1] == line[i + 2] ||
    line[i + 1] == line[i + 3] ||
    line[i + 1] == line[i + 4] ||
    line[i + 2] == line[i + 3] ||
    line[i + 2] == line[i + 4] ||
    line[i + 3] == line[i + 4];

  if (a && b && c && d && e && !check) {
    count++;
  }
}
console.log(count);
