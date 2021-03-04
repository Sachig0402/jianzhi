/**
 * @param {number} num
 * @return {number}
 */
// 线性规划,空间复杂度待改进
var translateNum = function (num) {
    let str = num.toString()
    let n = str.length
    let dp = new Array(n + 1)
    dp[0] = 1
    dp[1] = 1
    for (let i = 2; i < n + 1; i++) {
        let temp = str[i - 2] + str[i - 1]
        //不需要用Number(str[i - 2] + str[i - 1])转换为number,因为比大小时会自动用转换后的数字比较
        if (temp >= 10 && temp <= 25) {
            dp[i] = dp[i - 2] + dp[i - 1]
        } else {
            dp[i] = dp[i - 1]
        }
    }
    return dp[n]
};

// 空间复杂度已最优
var translateNum = function (num) {
    let str = num.toString()
    let n = str.length
    let dp = new Array(n + 1)
    let left = 1, right = 1
    for (let i = 2; i < n + 1; i++) {
        let temp = str[i - 2] + str[i - 1]
        //不需要用Number(str[i - 2] + str[i - 1])转换为number,因为比大小时会自动用转换后的数字比较
        if (temp >= 10 && temp <= 25) {
            let t = right
            right = left + right//最后要的是right
            left = t
        } else {
            right = right//这行可省略
            left = right//这句不要忘
        }
    }
    return right
};