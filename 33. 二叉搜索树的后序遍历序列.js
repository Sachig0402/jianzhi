// 看别人写的
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

// 自己写的
var verifyPostorder = function (postorder) {
    let len = postorder.length
    if (len < 2) return true
    let root = postorder[len - 1]

    let i = 0
    for (; i < len - 1; i++) {
        if (postorder[i] > root) {
            break
        }
    }

    let left = postorder.slice(0, i)
    let right = postorder.slice(i, len - 1)

    //! var mark = right.every((value) => { return value > root })
    // * 可以写上面这行,也可以写下面这几行
    let mark = true
    if (right.length) {
        for (let j = 0; j < right.length; j++) {
            if (right[j] < root) mark = false
        }
    }


    if (!mark) return false

    return verifyPostorder(left) && verifyPostorder(right)
};
