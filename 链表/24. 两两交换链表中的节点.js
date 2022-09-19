/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function (head) {
  if (head == null || head.next == null) {
    return head;
  }
  let dummyNode = new ListNode(0, head);
  let cur = dummyNode;
  while (cur.next && cur.next.next) {
    let two = cur.next.next;
    let one = cur.next;
    one.next = two.next;
    two.next = one;
    cur.next = two;
    cur = cur.next.next;
  }
  return head;
};
swapPairs([1, 2, 3, 4]);
