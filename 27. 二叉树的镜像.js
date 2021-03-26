// 递归
var mirrorTree = function (root) {
    /* if (!root) return root//或者 return null,这里return的东西没有
    if ((!root.left) && (!root.right)) return root
    let temp = root.left
    root.left = root.right
    root.right = temp

    if (root.left) mirrorTree(root.left)
    if (root.right) mirrorTree(root.right)

    return root */

    // 改进
    if (!root) return root
    if (!root.left && !root.right) return root

    let temp = root.left
    root.left = root.right
    root.right = temp
    mirrorTree(root.left)
    mirrorTree(root.right)

    return root
};

// 循环 迭代?
var mirrorTree = function (root) {
    if (root) {
        let stack = []
        stack.push(root)
        while (stack.length) {
            let node = stack.shift()
            let temp = node.left
            node.left = node.right
            node.right = temp
            if (node.left) stack.push(node.left)
            if (node.right) stack.push(node.right)
        }
    }
    return root
};

// 改进
var mirrorTree = function (root) {
    if (!root) return root
    let stack = [root]
    while (stack.length) {
        let node = stack.shift()
        let temp = node.left
        node.left = node.right
        node.right = temp
        if (node.left) stack.push(node.left)
        if (node.right) stack.push(node.right)
    }
    return root

};

// 这个也对
var mirrorTree = function (root) {
    if (!root) return root
    let stack = [root]
    while (stack.length) {
        let node = stack.shift()
        if (!node) continue
        let temp = node.left
        node.left = node.right
        node.right = temp
        stack.push(node.left)
        stack.push(node.right)
    }
    return root
};