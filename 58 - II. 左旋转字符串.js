/**
 * @param {string} s
 * @param {number} n
 * @return {string}
 */
// 法一
var reverseLeftWords = function (s, n) {
    n = n % (s.length)
    let left = s.slice(0, n), right = s.slice(n)
    return right.concat(left)
    // * return right + left//这个也行
    // * 可以直接 return s.slice(n)+s.slice(0, n)
    // * 不过时间空间都是一样的
};

// 法二 别人的方法 分治
var reverseLeftWords = function (s, n) {
    let left = '', right = '', i = 0
    for (let value of s) {
        // if (i < n) {
        //     left += value
        //     i++
        // } else if (i <= s.length) {
        //     right += value
        //     i++
        // }
        n-- > 0 ? left += value : right += value
    }
    return right + left
};