/**
 * @param {number} n
 * @return {number}
 */
// ! 法一 我想的方法 时间效率还可以,
var sumNums = function (n) {
    let res = n == 1 ? 1 : n + sumNums(n - 1)
    return res
};

// 法二 把乘除法转换为加减法
var sumNums = function (n) {
    return Math.round(Math.exp(Math.log(n) + Math.log(n + 1) - Math.log(2)))
    //!注意上面这行加不加Math.round都可以,结果没问题,别人的题解说对数和幂运算有浮点误差
};

// 法三 注意理解运算顺序 &&是逻辑与 优先级比+还低
var sumNums = function (n) {
    return n && sumNums(n - 1) + n;
};

// 法四 **是乘方 即 Math.pow(n,2),
// ! >>是右移一位,相当于除以二
var sumNums = function (n) {
    return (n ** 2 + n) >> 1;
};