/**
 * @param {string} str
 * @return {number}
 */
// * 法一 看了别人的思路
var strToInt = function (str) {
    if (!str.length) return 0
    let sum = 0, sign = 1, i = 0, len = str.length
    let min = -Math.pow(2, 31), max = Math.pow(2, 31) - 1
    while (str[i] == ' ' && i < len) {
        i++
    }
    if (str[i] == '+') {
        sign = 1
        i++
    } else if (str[i] == '-') {
        sign = -1
        i++
    }
    while (i < len) {
        if (str[i] > '9' || str[i] < '0') {
            break
        } else {
            sum = sum * 10 + Number(str[i])
            i++
        }
    }
    sum = sum * sign

    return sum > max ? max : sum < min ? min : sum

};

// * 法二 正则匹配 时间效率高
// ! 正则不需要考虑字符转数字类型的问题了,因为正则能判断字符的类型是数字还是其他
var strToInt = function (str) {
    let num = str.trim().match(/^[+-]?\d+/)
    if (!num) return 0
    let min = -Math.pow(2, 31), max = Math.pow(2, 31) - 1
    return num > max ? max : num < min ? min : num
};