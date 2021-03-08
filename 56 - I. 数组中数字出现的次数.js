/**
 * @param {number[]} nums
 * @return {number[]}
 */
// 哈希表
// 空间复杂度好像不满足
var singleNumbers = function (nums) {
    let aMap = new Map(), res = []
    for (let i of nums) {
        aMap[i] = (aMap[i] || 0) + 1 //数字第一次放入,该位置赋值为1,第二次就会变成2了,没有的位置为null
    }
    for (let key in aMap) {//key是下标
        if (aMap[key] == 1) {//aMap[key]的值可能是1,2,null
            res.push(key)
        }
    }
    return res
};