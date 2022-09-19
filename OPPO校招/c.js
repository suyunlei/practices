// 本题为考试单行多行输入输出规范示例，无需提交，不计分。
process.stdin.resume();
process.stdin.setEncoding("ascii");

var input = "";
var input_array = "";

process.stdin.on("data", function (data) {
  input += data;
});

process.stdin.on("end", function () {
  let arr = input.split(" ");
  let count = 0;
  let sample = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-"];
  // console.log(arr.length);
  for (let i = 0; i < arr.length; i++) {
    let curArray = arr[i].split("");
    let check = true;
    // 判断是不是http开头字符串
    if (curArray.length >= 4) {
      if (
        curArray[0] == "h" &&
        curArray[1] == "t" &&
        curArray[2] == "t" &&
        curArray[3] == "p"
      ) {
        check = false;
      }
    }
    if (check == false) {
      continue;
    }
    // 判断有没有数字和-
    for (let j = 0; j < curArray.length; j++) {
      if (sample.includes(curArray[j])) {
        // 就不算单词
        check = false;
        break;
      }
    }
    if (check === true) {
      count++;
    }
  }
  console.log(count);
});
