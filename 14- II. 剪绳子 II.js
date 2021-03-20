/**
 * @param {number} n
 * @return {number}
 */
var cuttingRope = function (n) {
    let arr = [0, 1, 1, 2, 4]
    if (n < 5) {
        return arr[n]
    }
    let res = 1;
    while (n >= 5) {
        //* res = res % 1000000007 * 3;//这行和下一行均可
        res = res * 3 * (1e9 + 7)
        n -= 3//* n最后可能为2,3,4,因为上一轮最小值为5,为5,6,7,减3就是2,3,4
    }
    return res * n % 1000000007
};