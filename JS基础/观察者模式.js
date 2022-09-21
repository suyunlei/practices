class Subject {
  constructor() {
    this.state = 0; // 1. 定义Suject
    this.oberservers = [];
  }
  attach(observer) {
    this.oberservers.push(observer); // 3. 将Observer绑定到Subject上
  }
  changeState(state) {
    this.state = state; // 4. 修改Subject状态
    this.oberservers.forEach((item) => {
      item.doSomeThing(this); // 5. 通知Observer
    });
  }
}

class Observer {
  constructor(name) {
    this.name = name; // 2. 定义Obeserver
  }
  doSomeThing(subject) {
    console.log("subject的状态改变了");
    console.log(subject.state); // 6. 获取Subject的状态，并且采取一系列动作
  }
}

let sub = new Subject();
let ob = new Observer("test");
sub.attach(ob);
sub.changeState(1);
