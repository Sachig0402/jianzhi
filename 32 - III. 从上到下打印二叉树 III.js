/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
    if (!root) return []
    let floor = 0
    let temp = [root]
    let stack = []
    while (temp.length) {
        stack[floor] = []
        let len = temp.length
        while (len) {
            let a = temp.shift()
            stack[floor].push(a.val)
            if (a.left) temp.push(a.left)
            if (a.right) temp.push(a.right)
            len--
        }
        if (floor % 2) {
            stack[floor].reverse()
        }
        floor++


    }
    return stack
};