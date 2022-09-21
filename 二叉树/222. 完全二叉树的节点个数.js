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
 * @return {number}
 */
var countNodes = function (root) {
  if (root == null) {
    return 0;
  }
  let res = [];
  const dfs = (node) => {
    if (node == null) {
      return;
    }
    res.push(node.val);
    node.left && dfs(node.left);
    node.right && dfs(node.right);
  };
  dfs(root);
  return res.length;
};
