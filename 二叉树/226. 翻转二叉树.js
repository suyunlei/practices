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
 * @return {TreeNode}
 */
var invertTree = function (root) {
  const change = (node) => {
    let temp = node.left;
    node.left = node.right;
    node.right = temp;
  };
  const helper = (node) => {
    if (node == null) {
      return;
    }
    change(node);
    node.left && helper(node.left);
    node.right && helper(node.right);
  };
  helper(root);
  return root;
};
