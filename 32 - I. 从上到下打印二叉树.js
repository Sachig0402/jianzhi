/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var levelOrder = function (root) {
    if (!root) return []
    let temp = [root], stack = []

    while (temp.length) {
        let a = temp.shift()
        stack.push(a.val)
        if (a.left) temp.push(a.left)
        if (a.right) temp.push(a.right)
    }
    return stack

};