/**
 * @param {number} d
 * @param {number} f
 * @param {number} target
 * @return {number}
 */
var numRollsToTarget = function (d, f, target) {
    // ! d个骰子 每个有f个面,即最大点数为f
    // 多重背包
    let dp = []

    for (let i = 0; i < d; i++) {
        // ! i的范围是0~d-1
        dp[i] = []
        for (let j = 0; j <= target; j++) {
            // ! j的范围是0~target
            dp[i][j] = 0
        }
    }

    for (let j = 1; j <= Math.min(f, target); j++) {
        dp[0][j] = 1;
    }


    for (let i = 1; i < d; i++) {//!i代表几个骰子
        for (let j = 1; j <= target; j++) {//!j代表目标和为多少
            for (let k = 1; k <= f && k <= j; k++) {
                dp[i][j] = (dp[i][j] + dp[i - 1][j - k]) % 1000000007
                // 循环加每一种情况
            }
        }
    }

    //  console.log(dp)

    return dp[d - 1][target]


};
