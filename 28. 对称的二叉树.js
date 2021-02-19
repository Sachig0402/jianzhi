
// ? 别人写的
var isSymmetric = function (root) {
    let isSame = function (a, b) {
        if (!a && !b) return true
        if (!a || !b) return false
        return ((a.val == b.val) && (isSame(a.left, b.right)) && (isSame(a.right, b.left)))
    }
    return isSame(root, root)
};
