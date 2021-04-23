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

//! 第二次写的二分查找
var search = function (nums, target) {
    if (!nums.length) return 0
    let left = 0, right = nums.length - 1
    while (left <= right) {
        let mid = Math.ceil((left + right) / 2)
        if (nums[mid] >= target) {
            right = mid - 1
        } else {
            left = mid + 1
        }
    }
    let a = right + 1
    left = 0, right = nums.length - 1
    while (left <= right) {
        let mid = Math.ceil((left + right) / 2)
        if (nums[mid] <= target) {
            left = mid + 1
        } else {
            right = mid - 1
        }
    }
    let b = left - 1
    return b - a + 1
};