/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

var lowestCommonAncestor = function (root, p, q) {
    if (!root) return null
    let aMap = new Map()
    let count = 0

    function dfs(root) {
        if (!root) return
        dfs(root.left)
        aMap.set(root, count)
        count++
        dfs(root.right)
    }

    dfs(root)

    let i = aMap.get(p), j = aMap.get(q)
    while (root) {
        k = aMap.get(root)
        if (k > i && k > j) {
            root = root.left
        } else if (k < i && k < j) {
            root = root.right
        } else {
            return root
            // console.log(root.val)
            // break
        }
    }
};

let a = new TreeNode(3)
let b = new TreeNode(5)
let c = new TreeNode(1)
let d = new TreeNode(6)
let e = new TreeNode(2)
let f = new TreeNode(0)
let g = new TreeNode(8)
let h = new TreeNode(7)
let i = new TreeNode(4)

a.left = b; a.right = c;
b.left = d; b.right = e;
c.left = f; c.right = g;
e.left = h; e.right = i;

lowestCommonAncestor(a, b, i)