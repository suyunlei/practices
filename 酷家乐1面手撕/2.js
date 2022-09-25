const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function shuffle(arr) {
  let res = [];
  while (arr.length > 0) {
    let num = Math.random() * 10;
    num = Math.floor(num);
    if (num < arr.length) {
      let a = arr.splice(num, 1);
      res.push(a[0]);
    }
  }
  return res;
}

console.log(shuffle(arr));
