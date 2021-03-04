/**
 * @param {number[]} nums
 * @return {number}
 */
// 时间复杂度n^2
var maxSubArray = function (nums) {
    if (!nums.length) return null
    let max = nums[0]
    for (let i = 0; i < nums.length; i++) {
        let temp = 0
        for (let j = i; j < nums.length; j++) {
            temp = temp + nums[j]
            if (temp > max) max = temp
        }
    }
    return max
};
//动态规划 时间复杂度 n
var maxSubArray = function (nums) {
    let len = nums.length, max = nums[0]
    for (let i = 1; i < len; i++) {
        nums[i] = Math.max(0, nums[i - 1]) + nums[i]
        if (nums[i] > max) max = nums[i]
    }
    return max
};