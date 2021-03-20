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

// !贪心算法
var cuttingRope = function (n) {
    if (n == 2) return 1
    if (n == 3) return 2
    let a = n % 3, b = Math.floor(n / 3)
    if (a == 0) {
        m = Math.pow(3, b)
    } else if (a == 1) {
        m = Math.pow(3, b - 1) * 4
    } else if (a == 2) {
        m = Math.pow(3, b) * 2
    }
    return m
};

// ! 上面这种方法更好 这两个都是贪心算法

var cuttingRope = function (n) {
    let arr = [0, 0, 1, 2, 4];
    if (n < 5) return arr[n];
    const max = 1e9 + 7;
    let res = 1;
    while (n >= 5) {
        res = res % max * 3;
        n = n - 3;
    }
    return res * n % max;
}