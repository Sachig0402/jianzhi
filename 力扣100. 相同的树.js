// 递归
var isSameTree = function (p, q) {
    if ((p == null) && (q == null)) {
        return true
    }
    if ((p == null) || (q == null)) {
        return false
    }
    if (p.val != q.val) {
        return false
    }

    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right)
    //左右必须都为null
};

// 迭代
var isSameTree = function (p, q) {
    let queue = [{ p, q }]
    while (queue.length) {
        let curr = queue.shift()
        if ((curr.p == null) && (curr.q == null)) {
            continue // ! 此时还不能说明是true,如1和1,null,2
        }
        if ((curr.p == null) || (curr.q) == null) {
            return false // * 只有false会返回
        }
        if ((curr.p.val) != (curr.q.val)) {
            return false // * 只有false会返回
        }
        if ((curr.p.val) == (curr.q.val)) {
            queue.push(
                { p: curr.p.left, q: curr.q.left },
                { p: curr.p.right, q: curr.q.right }
            )
        }
    }
    return true // ! 所有条件的都通过了才能返回true 如1和1,null,2
};