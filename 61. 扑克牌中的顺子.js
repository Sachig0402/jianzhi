/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isStraight = function (nums) {
    let aSet = new Set()
    let min = 14, max = 0
    for (let item of nums) {// !注意一定是of,不是in,of是遍历元素值,in是遍历key,即属性名
        if (aSet.has(item)) return false
        if (!item) continue
        aSet.add(item)
        if (item < min) min = item
        if (item > max) max = item
    }
    return max - min < 5
};