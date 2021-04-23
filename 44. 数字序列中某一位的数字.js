/**
 * @param {number} n
 * @return {number}
 */
// !第一次看完别人的写的
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

//! 第二次就自己做出来了
var findNthDigit = function (n) {
    if (n >= 0 && n <= 9) {
        return n
    }
    // n--
    let i = 0
    // pack = 9 * Math.pow(10, i)
    // weishu = pack * (i + 1)
    while (n > 9 * Math.pow(10, i) * (i + 1)) {
        n -= 9 * Math.pow(10, i) * (i + 1)
        i++
    }

    let base = Math.pow(10, i)
    let th = Math.floor(n / (i + 1))
    let rest = n % (i + 1)
    if (rest) {
        let the_num = base + th
        let res = String(the_num)[rest - 1]
        return Number(res)
    } else {
        let the_num = base + th - 1
        let res = String(the_num)
        return Number(res[res.length - 1])
    }
    
};