/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

//  二分查找
var search = function (nums, target) {
    let low = 0, high = nums.length - 1, first = -1, last = -1
    while (low <= high) {
        let mid = parseInt((low + high) / 2)
        if (nums[mid] == target) {
            first = mid
            high = mid - 1
        } else if (nums[mid] > target) {
            high = mid - 1
        } else {
            low = mid + 1
        }
    }

    low = 0, high = nums.length - 1
    while (low <= high) {
        let mid = parseInt((low + high) / 2)
        if (nums[mid] == target) {
            last = mid
            low = mid + 1
        }
        else if (nums[mid] > target) {
            high = mid - 1
        } else {
            low = mid + 1
        }
    }
    if (first == -1) return 0
    return last - first + 1

};