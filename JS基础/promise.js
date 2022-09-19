function Promise(excutor) {
  const self = this;
  this.promiseState = "pending";
  this.promiseResult = "";
  this.callbacks = [];
  function resolve(data) {
    // 直接调用时this的指向会是window
    if (self.promiseState !== "pending") {
      return;
    }
    self.promiseState = "fulfilled";
    self.promiseResult = data;
    self.callbacks.forEach((item) => {
      item.onResolved;
    });
  }
  function reject(data) {
    if (self.promiseState !== "pending") {
      return;
    }
    self.promiseState = "rejected";
    self.promiseResult = data;
    self.callbacks.forEach((item) => {
      item.onRejected;
    });
  }
  // 目的是throw也可以改变对象状态
  try {
    excutor(resolve, reject);
  } catch (e) {
    reject(e);
  }
}
Promise.prototype.then = function (onResolved, onRejected) {
  return new Promise((resolve, reject) => {
    if (this.promiseState === "fulfilled") {
      let result = onResolved(this.promiseResult);
      if (result instanceof Promise) {
        result.then(
          (v) => {
            resolve(v);
          },
          (e) => {
            reject(e);
          }
        );
      } else {
        resolve(result);
      }
    }
    if (this.promiseState === "rejected") {
      onRejected(this.promiseResult);
    }
    if (this.promiseState === "pending") {
      this.callbacks.push({
        onResolved,
        onRejected,
      });
    }
  });
};

/**
 * Promise.all的封装
 * @param {Promise []} promises
 * @returns
 */
Promise.all = function (promises) {
  return new Promise((resolve, reject) => {
    let count = 0;
    let arr = [];
    for (let i = 0; i < promises.length; i++) {
      promises[i].then(
        (v) => {
          // 得知对象状态是成功的
          // 每个promise对象都成功，就resolve
          count++;
          arr[i] = promises[i];
          if (count === promises.length) {
            resolve(arr);
          }
        },
        (r) => {
          reject(r);
        }
      );
    }
  });
};

/**
 * Promise.race的封装
 * @param {Promise []} promises
 */
Promise.race = function (promises) {
  return new Promise((resolve, reject) => {
    for (let i = 0; i < promises.length; i++) {
      promises[i].then(
        (v) => {
          // 谁先运行 谁就决定了结果
          // 修改返回对象的状态为[成功]
          resolve(v);
        },
        (r) => {
          // 修改返回对象的状态为[失败]
          reject(r);
        }
      );
    }
  });
};
