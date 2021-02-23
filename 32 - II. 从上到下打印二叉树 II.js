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
    let temp = [root]
    let stack = []
    let floor = 0
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
        floor++
    }
    return stack
};