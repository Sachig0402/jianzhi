/**
 * @param {number} n
 * @return {number[]}
 */
// ! 还没看懂
var twoSum = function (n) {
    if (n < 1) {
        return [];
    }
    const res = [0, 1, 1, 1, 1, 1, 1];// * res是用来记录最终结果的
    for (let i = 1; i < n; i++) {
        for (let j = 6 * n; j > 0; j--) {
            // *  6*n是总点数的最大值,扔出这个值概率最小,然后往下走,概率逐渐增大
            res[j] = res
                .slice(Math.max(0, j - 6), j)
                .reduce((acc, cur) => acc + cur, 0);
        }
    }
    return res.slice(1).map(num => num / Math.pow(6, n)).filter(Boolean);
};
