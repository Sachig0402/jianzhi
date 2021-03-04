/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxValue = function (grid) {
    if (!grid.length && !grid[0].length) return 0
    let row = grid.length, col = grid[0].length
    // let matrix = new Array(row + 1).forEach(() => { return new Array(col + 1) })
    let matrix = []
    for (let i = 0; i < row + 1; i++) {
        matrix[i] = []
        for (let j = 0; j < col + 1; j++) {
            matrix[i][j] = 0
        }
    }

    let max = grid[0][0]

    for (let i = 0; i < row + 1; i++) {
        for (let j = 0; j < col + 1; j++) {
            if (i == 0 || j == 0) {
                matrix[i][j] = 0
            } else {
                matrix[i][j] = Math.max(matrix[i - 1][j], matrix[i][j - 1]) + grid[i - 1][j - 1]
                if (matrix[i][j] > max) {
                    max = matrix[i][j]
                }
            }

        }
    }
    return max
};