let a = ["A", "H", "I", "M", "O", "T", "U", "V", "W", "X", "Y"];
// let s = "AHHA";
while ((s = read_line()) != "") {
  let arr = [...s];
  let check = true;
  for (let i = 0; i < arr.length; i++) {
    if (!a.includes(arr[i])) {
      check = false;
      console.log("NO");
      break;
    }
  }
  let left = 0;
  let right = arr.length - 1;
  if (check == true) {
    while (left <= right) {
      if (arr[left] == arr[right]) {
        left++;
        right--;
      } else {
        check = false;
        console.log("NO");
        break;
      }
    }
  }
  if (check == true) {
    console.log("YES");
  }
}
