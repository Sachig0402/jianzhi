/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */

// !自己想的出栈入栈,时间复杂度好像有点高
var isBalanced = function (root) {
    if (!root) return true
    let stack = [root]
    while (stack.length) {
        let node = stack.shift()
        if (Math.abs(cal(node.left) - cal(node.right)) > 1) return false
        if (node.left) stack.push(node.left)
        if (node.right) stack.push(node.right)
    }
    return true

    function cal(node) {
        if (!node) return 0
        return 1 + Math.max(cal(node.left), cal(node.right))
    }
};

// *法一 递归 深度优先遍历(自顶向下)
var isBalanced = function (root) {
    if (!root) return true
    let left = depth(root.left), right = depth(root.right)

    return Math.abs(left - right) <= 1 && isBalanced(root.left) && isBalanced(root.right)
};

function depth(root) {
    if (!root) return 0
    return Math.max(depth(root.left), depth(root.right)) + 1
}

// 法二 动态规划 自底向上 每次递归都将值存储起来
var isBalanced = function (root) {
    return dfs(root) != -1
};

function dfs(root) {
    if (!root) return 0
    let left = dfs(root.left), right = dfs(root.right)//这算动态规划吗?每次递归都将左和右的高度或-1存储起来
    if (left == -1 || right == -1 || Math.abs(left - right) > 1) return -1
    return Math.max(left, right) + 1//返回子树的高度
}
