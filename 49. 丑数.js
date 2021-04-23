/**
 * @param {number} n
 * @return {number}
 */
var nthUglyNumber = function (n) {
    let dp = new Array(n).fill(0)
    dp[0] = 1
    //* let dp = [1]
    // 直接用上面这种写法也可
    let a = 0, b = 0, c = 0
    for (let i = 1; i < n; i++) {
        dp[i] = Math.min(dp[a] * 2, dp[b] * 3, dp[c] * 5)
        if (dp[i] == dp[a] * 2) a++
        if (dp[i] == dp[b] * 3) b++
        if (dp[i] == dp[c] * 5) c++
    }
    return dp[n - 1]
};