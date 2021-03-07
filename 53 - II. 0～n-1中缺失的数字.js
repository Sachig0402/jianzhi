/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
    let len = nums.length
    let left = 0, right = len - 1, mid
    while (left <= right) {
        mid = parseInt((left + right) / 2)
        if (nums[mid] == mid) {
            left = mid + 1
        } else {
            right = mid - 1
        }
    }
    return left//等价于Math.max(left, right),因为最后left总是>=right的
};