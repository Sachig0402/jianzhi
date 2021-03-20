/**
 * @param {number} n
 * @return {number}
 */
var findNthDigit = function (n) {
    let digit = 1, num = 9 * Math.pow(10, digit - 1), count = digit * num, rest = n
    while (n > count) {
        n = n - count
        digit += 1
        num = 9 * Math.pow(10, digit - 1)
        count = digit * num
    }
    let a = parseInt(n / digit)
    let b = n % digit
    let target
    if (b) {
        let targetNum = (Math.pow(10, digit - 1) + a).toString()
        target = Number(targetNum[b - 1])
    } else {
        let targetNum = (Math.pow(10, digit - 1) + a - 1).toString()
        target = Number(targetNum[targetNum.length - 1])
    }
    return target
};