/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
// 二叉树的最小深度是到叶子节点的最短距离
/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth = function (root) {
  if (root == null) {
    return 0;
  }
  let queue = [root];
  let level = 0;
  while (queue.length) {
    let n = queue.length;
    let curLevel = [];
    level += 1;
    for (let i = 0; i < n; i++) {
      let node = queue.shift();
      curLevel.push(node.val);
      if (node.left == null && node.right == null) {
        return level;
      }
      node.left && queue.push(node.left);
      node.right && queue.push(node.right);
    }
  }
};
