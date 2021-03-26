
// ? 别人写的
var isSymmetric = function (root) {
    let isSame = function (a, b) {
        if (!a && !b) return true
        if (!a || !b) return false
        return ((a.val == b.val) && (isSame(a.left, b.right)) && (isSame(a.right, b.left)))
    }
    return isSame(root, root)
};

// *自己会写了
var isSymmetric = function (root) {
    if (root == null) return true
    if ((root.left == null) && (root.right == null)) return true

    function isSame(a, b) {
        if (!a && !b) return true
        if (!a || !b) return false
        if (a.val != b.val) return false
        if (a.val == b.val) {
            return isSame(a.left, b.right) && isSame(a.right, b.left)
        }
    }

    return isSame(root.left, root.right)
    // return isSame(root, root)
};