/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
// 时间复杂度 O(n)?因为全部遍历了一遍
var maxDepth = function (root) {
    if (!root) return 0
    return 1 + Math.max(maxDepth(root.left), maxDepth(root.right))
};

// 调试部分
// function TreeNode(val) {
//     this.val = val
//     this.right = this.left = null
// }

// var a = new TreeNode(3)
// var b = new TreeNode(9)
// var c = new TreeNode(20)
// var d = new TreeNode(15)
// var e = new TreeNode(7)

// a.left = b
// a.right = c
// c.left = d
// c.right = e

// maxDepth(a)


// 法二 用栈,一次一次弹出
var maxDepth = function (root) {
    if (!root) return 0
    let stack = [[root, 1]], res = 1
    while (stack.length) {
        let [node, temp] = stack.shift()//结构赋值
        res = Math.max(res, temp)
        if (node.left) {
            stack.push([node.left, temp + 1])
        }
        if (node.right) {
            stack.push([node.right, temp + 1])
        }
    }
    return res

};