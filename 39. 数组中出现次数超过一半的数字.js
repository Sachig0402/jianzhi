/**
 * @param {number[]} nums
 * @return {number}
 */

//法一 很慢 

var majorityElement = function (nums) {
    let len = nums.length, count = 0
    if (len == 1 || len == 2) return nums[0]
    for (let i = 0; i <= len / 2; i++) {
        count = 1
        for (let j = i + 1; j < len; j++) {
            if (nums[j] == nums[i]) {
                count++
            }
        }
        if (count > len / 2) return nums[i]
        count = 0
    }
};


// 法二
先按序排列,这个数肯定在中间
var majorityElement = function (nums) {
    nums.sort((a, b) => { return a - b })
    return nums[Math.floor(nums.length / 2)]

};








majorityElement([3,2,3])