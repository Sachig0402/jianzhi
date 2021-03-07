/**
 * @param {number[]} nums
 * @return {number}
 */


//  归并排序法,时间复杂度O(nlogn)
var reversePairs = function (nums) {
    let res = 0;
    splitNums(nums)
    return res

    //分割成两个数组
    function splitNums(nums) {
        if (nums.length <= 1) return nums
        let mid = Math.ceil(nums.length / 2)
        let leftNums = nums.slice(0, mid), rightNums = nums.slice(mid)
        return mergeNums(splitNums(leftNums), splitNums(rightNums))
    }

    // 将分割的两个数组归并排序
    function mergeNums(leftNums, rightNums) {
        let leftLen = leftNums.length, rightLen = rightNums.length, len = leftLen + rightLen
        let arr = []
        for (let left = 0, right = 0, index = 0; index < len; index++) {
            if (left >= leftLen) {
                arr[index] = rightNums[right]
                right++
            } else if (right >= rightLen) {
                arr[index] = leftNums[left]
                left++
            } else if (leftNums[left] <= rightNums[right]) {
                arr[index] = leftNums[left]
                left++
            } else if (leftNums[left] > rightNums[right]) {
                arr[index] = rightNums[right]
                right++
                res += leftLen - left
            }
        }
        return arr
    }
};