// 动态规划
var cuttingRope = function (n) {
    let dp = new Array(n + 1).fill(1)
    for (let i = 3; i <= n; i++) {
        for (let j = 1; j < i; j++) {
            dp[i] = Math.max(dp[i], j * (i - j), j * dp[i - j])
            //             上面这个dp[i]是指,内层循环的每一次循环都会更新一个dp[i],要和上一次循环得到的dp[i]比较,得到这一轮的
        }
    }
    return dp[n]
};

cuttingRope(120)

// 贪心算法
