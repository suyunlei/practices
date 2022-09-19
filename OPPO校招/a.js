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
  for (let i = 0; i < arr.length; i++) {
    arr[i] = parseInt(arr[i]);
  }
  arr.sort((a, b) => {
    return a - b;
  });
  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length; j++) {
      for (let k = j; k < arr.length; k++) {
        let temp = arr[i] * arr[i] + arr[j] * arr[j];
        if (temp === arr[k] * arr[k] && arr[i] + arr[j] > arr[k]) {
          count++;
        }
      }
    }
  }
  console.log(count);
});
