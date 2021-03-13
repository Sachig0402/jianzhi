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
// 法一 我想到的,用map存各个节点的中序遍历位置,转化为上一题的思路
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


// 法二 递归 别人的思路
var lowestCommonAncestor = function (root, p, q) {
    if (!root || root == p || root == q) { //如果根节点为空,或根节点为要查找的p或q,就直接返回
        return root
    }
    let left = lowestCommonAncestor(root.left, p, q), right = lowestCommonAncestor(root.right, p, q)
    
    return left && right ? root : left || right
    // * 若左右子树都查到了,就返回这个根节点,若不是全查到了,左子树若查到了,就返回左子树返回的值,若左子树没查到,就返回右子树返回的值,当然也可能都没查到,left||right为null

    /* 
    ! 也可以写下面这种格式,意思是一样的
     * 分别向左右查找,查找到p或q节点就返回,传给上层
    if (!left) return right
    * 如果左子树没有,就返回右子树查找到的节点(当然右子树可能也没有,返回的是null,这样给上层节点的也是null)
    if (!right) return left
    * 同理
    return root
    */
    
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