var isSubStructure = function (A, B) {
    // 题目约定：空树不是任意一个树的子结构
    if (!A || !B) {
        return false;
    }

    let isChild = function (a, b) {
        if (b == null) return true
        if (a == null) return false
        if (a.val != b.val) return false
        return (isChild(a.left, b.left) && isChild(a.right, b.right))
    }

    return (
        isChild(A, B) ||
        isSubStructure(A.left, B) ||
        isSubStructure(A.right, B) // 会递归着找A的所有子树,总会有一个节点和B的根节点相同,然后在isChild函数里递归地判断下面是否也相同
    )


};