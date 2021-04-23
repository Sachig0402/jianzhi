/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

//法二 最好的方法,其实可以省略二分查找,直接双指针
var twoSum = function (nums, target) {

    // return [right, right]
    let i = 0, j = nums.length - 1
    while (i < j) {
        if (nums[i] + nums[j] > target) {
            j--
        } else if (nums[i] + nums[j] < target) {
            i++
        } else if (nums[i] + nums[j] == target) {
            return [nums[i], nums[j]]
        }
    }
};

// 法一 先二分查找定位到比target小的最大值,然后以这个位置为最右边,在他的左边找要找的两个值
var twoSum = function (nums, target) {
    let left = 0, right = nums.length - 1 //right是3

    while (left <= right) {
        let mid = Math.floor((left + right) / 2)
        // 第一轮mid是1 第二轮mid是2

        if (nums[mid] == target) {
            right = mid
            break
        } else if (nums[mid] > target) {
            right = mid - 1 //第二轮right变为1
        } else if (nums[mid] < target) {
            left = mid + 1 //第一轮left变为2
        }
    }
    // return [right, right]
    let i = 0, j = right
    while (i < j) {
        if (nums[i] + nums[j] > target) {
            j--
        } else if (nums[i] + nums[j] < target) {
            i++
        } else if (nums[i] + nums[j] == target) {
            return [nums[i], nums[j]]
        }
    }
};

