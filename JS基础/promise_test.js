/**
 * Promise内包裹一个异步任务，Promise需要传入一个函数。
 * 这个函数有两个参数，也都为函数。
 * p.then也要传入两个函数，第一个为成功的回调，第二个为失败的回调
 */
// let p = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     let a = 30;
//     if (a < 30) {
//       resolve(a); //会改变Promise的状态
//     } else {
//       reject(a); //会改变Promise的状态
//     }
//   }, 2000);
// });
// p.then(
//   (value) => {
//     alert("成功", "a=" + value);
//   },
//   (reason) => {
//     alert("失败", "a=" + reason);
//   }
// );

// 用Promise封装一个ajax请求
function sendAjax(url) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.responseType = "json";
    xhr.open("GET", url);
    xhr.send();
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if (xhr.status >= 200 && xhr.status < 300) {
          resolve(xhr.response);
        } else {
          reject(xhr.status);
        }
      }
    };
  });
}
let a = document.getElementById("a");
a.addEventListener("click", async function () {
  let a = await sendAjax("https://api.apiopen.top/api/getImages", {
    type: "animal",
    page: 0,
    size: 10,
  });
  console.log(a);
});

// let a = sendAjax("https://api.apiopen.top/api/getImages", {
//   type: "animal",
//   page: 0,
//   size: 10,
// }).then(
//   (value) => {
//     console.log(value);
//   },
//   (reason) => {
//     console.warn(reason);
//   }
// );
// let b = Promise.resolve("success");
// let arr = [a, b];
// let c = Promise.all(arr);
// console.log(c);

// 讨论输出顺序
// let p1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve();
//     console.log("111");
//   }, 2000);
// });
// p1.then((value) => {
//   console.log("222");
// });
// console.log("333");

// async function test() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve();
//     }, 2000);
//   });
// }
// let res = test();
// console.log(res); // fulfilled的Promise

// async function test() {
//   let p = new Promise((resolve, reject) => {
//     // 为成功的情况
//     // resolve("OK");
//     reject("Error");
//   });
//   try {
//     let res = await p;
//   } catch (e) {
//     console.log(res);
//   }
// }

const p = new Promise((resolve, reject) => {
  let a;
  if (a < 30) {
    resolve("OK");
  } else {
    reject("Error");
  }
});
p.then(
  (value) => {
    console.log(value);
  },
  (error) => {
    console.warn(error);
  }
);
