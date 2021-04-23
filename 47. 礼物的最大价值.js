/**
 * @param {number[][]} grid
 * @return {number}
 */

var maxValue = function (grid) {
    if (!grid.length || !grid[0]) return 0
    // !    !grid[0].length就是[[]]的情况
    let row = grid.length, col = grid[0].length
    let dp = []
    for (let i = 0; i < row + 1; i++) {
        dp[i] = []
        for (let j = 0; j < col + 1; j++) {
            dp[i][j] = 0
        }
    }

    // let max = grid[0][0]
    for (let i = 1; i < row + 1; i++) {
        for (let j = 1; j < col + 1; j++) {
            dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]) + grid[i - 1][j - 1]
        }
    }
    return dp[row][col]
};