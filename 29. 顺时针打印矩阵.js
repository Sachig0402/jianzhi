// 
//   @param {number[][]} matrix
//   @return {number[]}

//  别人写的法一
var spiralOrder = function (matrix) {
    let res = []
    let flag = true
    while (matrix.length) {
        // 从左到右
        if (flag) {
            // 第一层
            res = res.concat(matrix.shift())
            // '现在'的第一层到最后一层的末尾
            for (let i = 0; i < matrix.length; i++) {
                matrix[i].length && res.push(matrix[i].pop())
            }
            // 右到左   
        } else {
            // 最后一层
            res = res.concat(matrix.pop().reverse())
            // '现在'的最后一层到第一层 
            for (let i = matrix.length - 1; i >= 0; i--) {
                matrix[i].length && res.push(matrix[i].shift())
            }
        }
        flag = !flag
    }
    return res
};

// 官方方法 法二

// !法三 我自己写的 
var spiralOrder = function (matrix) {
    if (!matrix.length) return []
    let row = matrix.length, col = matrix[0].length, res = []
    let allNum = row * col

    let i = 0, j = -1
    while (res.length < allNum) {
        while ((j < col - 1) && (matrix[i][j + 1] !== '-')) {
            j = j + 1
            res.push(matrix[i][j])
            matrix[i][j] = '-'
        }
        while ((i < row - 1) && (matrix[i + 1][j] !== '-')) {
            i = i + 1
            res.push(matrix[i][j])
            matrix[i][j] = '-'
        }
        while ((j > 0) && (matrix[i][j - 1] !== '-')) {
            j = j - 1
            res.push(matrix[i][j])
            matrix[i][j] = '-'
        }
        while ((i > 0) && (matrix[i - 1][j] !== '-')) {
            i = i - 1
            res.push(matrix[i][j])
            matrix[i][j] = '-'
        }
    }
    return res
};

spiralOrder([[1, 2, 3], [4, 5, 6], [7, 8, 9]])
