/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
// 法一 暴力法 时间复杂度O(kn)
var maxSlidingWindow = function (nums, k) {
    if (!nums.length) return []
    if (k === 1) return nums
    let arr = []
    for (let i = 0; i < nums.length - k + 1; i++) {
        let max = nums[i]
        for (let j = i + 1; j < i + k; j++) {
            if (nums[j] > max) {
                max = nums[j]
            }
        }
        arr.push(max)
    }
    return arr
};

// 暴力法2 别人写的 这个更慢
var maxSlidingWindow = function (nums, k) {
    if (!nums.length) return []
    let arr = []
    for (let i = 0; i < nums.length - k + 1; i++) {
        arr.push(Math.max(...nums.slice(i, i + k)))
    }
    return arr
};

