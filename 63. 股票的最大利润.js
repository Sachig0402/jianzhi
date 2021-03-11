/**
 * @param {number[]} prices
 * @return {number}
 */
// 我想的 法一 时间效率不错 空间效率比较低
var maxProfit = function (prices) {
    let dp = [prices[0]]//用来存这之前的prices的最小值
    let profit = [0]
    for (let i = 1; i < prices.length; i++) {
        dp[i] = Math.min(dp[i - 1], prices[i])
    }
    for (let i = 1; i < prices.length; i++) {
        if (prices[i] > dp[i]) {
            profit[i] = prices[i] - dp[i]
        } else {
            profit[i] = 0
        }
    }
    return Math.max(...profit)// ! 注意要解构 Math.max(sth)方法只能用于非数组
};

// * 官方题解 应该算法一的改进
var maxProfit = function (prices) {
    let minPrice = Number.MAX_VALUE
    let maxProfit = 0
    for (let value of prices) {
        maxProfit = Math.max(maxProfit, value - minPrice)
        minPrice = Math.min(minPrice, value)
    }
    return maxProfit
};