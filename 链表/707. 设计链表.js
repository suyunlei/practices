function Node(val, next) {
  this.val = val;
  this.next = next;
}
// class Node{
//     constructor(val,next){
//         this.val = val;
//         this.next = next;
//     }
// }

var MyLinkedList = function () {
  this.head = null;
  this.tail = null;
  this.size = 0;
};

/**
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function (index) {
  if (index < 0 || index >= this.size) {
    return -1;
  }
  let dummyNode = new Node(0, this.head);
  let current = dummyNode;
  // index是多少就移动几次
  while (index >= 0) {
    current = current.next;
    index--;
  }
  return current.val;
};

/**
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function (val) {
  let newHead = new Node(val, this.head);
  this.head = newHead;
  this.size = this.size + 1;
};

/**
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function (val) {
  if (this.head == null) {
    this.addAtHead(val);
    return;
  }
  let dummyNode = new Node(0, this.head);
  let current = dummyNode;
  while (current.next) {
    current = current.next;
  }
  let newTail = new Node(val, null);
  current.next = newTail;
  this.size = this.size + 1;
};

/**
 * @param {number} index
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function (index, val) {
  let a = new Node(val, null);
  let dummyNode = new Node(0, this.head);
  let current = dummyNode;
  if (index <= 0) {
    a.next = this.head;
    this.addAtHead(val);
    return;
  } else if (index == this.size) {
    this.addAtTail(val);
    return;
  } else if (index > this.size) {
    return;
  } else {
    // 在中间添加
    // 找到index的前一个节点 (index>0)
    while (index > 0) {
      current = current.next;
      index--;
    }
    a.next = current.next;
    current.next = a;
    this.size = this.size + 1;
  }
};

/**
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function (index) {
  if (index < 0 || index >= this.size) {
    return;
  }
  if (index == 0) {
    this.size--;
    this.head = this.head.next;
  } else {
    let dummyNode = new Node(0, this.head);
    let current = dummyNode;
    while (index > 0) {
      current = current.next;
      index--;
    }
    this.tail = current.next;
    this.size--;
    current.next = current.next.next;
  }
};

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */
