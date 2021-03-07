/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */

// 中序遍历 
var kthLargest = function (root, k) {
    let arr = []

    function dfs(root) {
        if (!root) {
            return
        } else {
            dfs(root.left)
            arr.push(root.val)
            dfs(root.right)
        }
    }

    dfs(root)

    return arr[arr.length - k]

};

// 中序遍历改进1 反中序遍历
var kthLargest = function (root, k) {
    let arr = []

    function dfs(root) {
        if (!root) {
            return
        } else {
            dfs(root.right)
            arr.push(root.val)
            dfs(root.left)
        }
    }

    dfs(root)

    return arr[k - 1]
};

// 改进2 反中序遍历 只记录到第k个
var kthLargest = function (root, k) {
    let count = 0, res = null

    function dfs(root) {
        if (!root) {
            return
        } else {
            dfs(root.right)
            count++
            if (count == k) {
                res = root.val
                return
            }
            dfs(root.left)
        }
    }

    dfs(root)

    return res
};