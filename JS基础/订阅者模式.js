let event_channel = {
  subscribers: [],
  on(method) {
    // 订阅
    this.subscribers.push(method); // 把每一个订阅者的方法存起来
  },
  emit(message) {
    // 发布
    this.subscribers.forEach((item) => {
      item(message);
    });
  },
};
event_channel.on((value) => {
  console.log("first-one get" + value); // 订阅时绑定的是一个个方法
});
event_channel.on((value) => {
  console.log("second-one also get" + value);
});
event_channel.emit("300"); // 发布一个值
