/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function (root) {
    // if (!root) return []
    let stack = [root], res = []
    while (stack.length) {
        let temp = stack.shift()
        if (temp) {
            res.push(temp.val)
            stack.push(temp.left)
            stack.push(temp.right)
        } else {
            res.push('#')
        }
    }
    return res
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function (data) {
    if (data == '#') return null;

    let root = new TreeNode(data[0])
    let stack = [root]
    let cursor = 1

    while (cursor < data.length) {
        let temp = stack.shift()
        let leftVal = data[cursor]
        let rightVal = data[cursor + 1]
        if (leftVal != '#') {
            let nodeLeft = new TreeNode(leftVal)
            temp.left = nodeLeft
            stack.push(nodeLeft)
        }
        if (rightVal != '#') {
            let nodeRight = new TreeNode(rightVal)
            temp.right = nodeRight
            stack.push(nodeRight)
        }
        cursor += 2
    }
    return root
};

/**
 * Your functions will be called as such: 注意这里
 * deserialize(serialize(root));          两个函数是这样运行的
 */