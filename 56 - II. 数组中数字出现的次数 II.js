/**
 * @param {number[]} nums
 * @return {number}
 */
// ! 法一 哈希表法 法二 位运算没看懂
var singleNumber = function (nums) {
    let aMap = new Map()
    for (let i of nums) {
        aMap[i] = (aMap[i] || 0) + 1
    }
    for (let key in aMap) {
        if (aMap[key] == 1) {
            return key
        }
    }
};