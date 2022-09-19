// 本题为考试单行多行输入输出规范示例，无需提交，不计分。
process.stdin.resume();
process.stdin.setEncoding("ascii");

var input = "";
var input_array = "";

process.stdin.on("data", function (data) {
  input += data;
});

process.stdin.on("end", function () {
  input = input.split("");
  if (input[0] >= "A" && input[0] <= "Z") {
    console.log(input.join(""));
  } else {
    let res = [];
    let arr = [];
    for (let i = 0; i < input.length; i++) {
      let cur = input[i];
      if (cur >= "a" && cur <= "z") {
        arr.push(cur);
      }
      if (cur >= "A" && cur <= "Z") {
        res.push(arr);
        arr = [];
        if (input[i + 1] >= "a" && input[i + 1] <= "z") {
          input[i] = cur.toLowerCase();
          i = i - 1;
        } else {
          let j = i;
          while (j < input.length) {
            if (input[j] >= "A" && input[j] <= "B") {
              arr.push(input[j].toLowerCase());
              j++;
            } else {
              break;
            }
          }
        }
      }
      if (i == input.length - 1) {
        res.push(arr);
      }
    }
    console.log(res.join("_").split(",").join(""));
  }
});
