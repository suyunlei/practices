/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function (root) {
  let res = [];
  const helper = (node) => {
    if (node === null) {
      return;
    }
    node.left && helper(node.left);
    res.push(node.val);
    node.right && helper(node.right);
  };
  helper(root);
  return res;
};
