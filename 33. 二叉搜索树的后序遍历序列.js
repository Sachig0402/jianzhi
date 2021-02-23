var verifyPostorder = function (postorder) {
    let len = postorder.length
    if (len < 2) return true
    let root = postorder[len - 1]
    let i = 0
    for (; i < len - 1; i++) {
        if (postorder[i] > root) break
    }
    let rightTree = postorder.slice(i, len - 1)
    let result = rightTree.every((x) => { return x > root })
    if (result) {
        let leftTree = postorder.slice(0, i)
        // if (verifyPostorder(leftTree) && verifyPostorder(rightTree)) {
        //     return true
        // }
        // !不能用上面这种写法,因为有可能返回false,这样本层就不会返回值了,即结果为undefined
        return (verifyPostorder(leftTree) && verifyPostorder(rightTree))
    } else {
        return false
    }
};