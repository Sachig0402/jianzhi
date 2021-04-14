/**
 * // Definition for a Node.
 * function Node(val,left,right) {
 *    this.val = val;
 *    this.left = left;
 *    this.right = right;
 * };
 */
/**
 * @param {Node} root
 * @return {Node}
 */

// 别人写的我默写的
var treeToDoublyList = function (root) {

    function dfs(root) {//!中序遍历一棵树
        if (!root) return null
        dfs(root.left)
        stack.push(root)//不能是root.val,
        // 如果写root.val,这个元素就没有left和right属性了
        // 压入栈里的每一个元素都是个node节点
        dfs(root.right)
    }

    // 或者把上面的方法改成
    /* if (!root) return null
    function dfs(root) {
        if (root.left) dfs(root.left)
        stack.push(root)
        if (root.right) dfs(root.right)
    } */

    let stack = []
    dfs(root)//此时所有节点已经中序遍历进入stack

    /* for (let i = 0; i < stack.length; i++) {
            if (i == 0) {
                stack[i].left = stack[stack.length - 1]
                stack[i].right = stack[i + 1]
            } else if (i == (stack.length - 1)) {
                stack[i].left = stack[i - 1]
                stack[i].right = stack[0]
            } else {
                stack[i].left = stack[i - 1]
                stack[i].right = stack[i + 1]
            }
        } */
    // !上面这个不行,若stack里只有一个元素会有问题

    // 然后添加右指针
    for (let i = 0; i < stack.length; i++) {
        if (i == stack.length - 1) {
            stack[i].right = stack[0]
        } else {
            stack[i].right = stack[i + 1]
        }
    }
    // 添加左指针
    for (let i = 0; i < stack.length; i++) {
        if (i == 0) {
            stack[i].left = stack[stack.length - 1]
        } else {
            stack[i].left = stack[i - 1]
        }
    }
    return stack[0]
};