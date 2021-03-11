/**
 * @param {number} n
 * @param {number} m
 * @return {number}
 */
// ! 我自己想的,结果有一半不对,不知道为什么
var lastRemaining = function (n, m) {
    let arr = [], temp = m
    for (let i = 0; i < n; i++) {
        arr[i] = i
    }
    for (let i = n; i > 1; i--) {
        if (m > i) temp = m % i
        let left = arr.slice(0, temp - 1)
        let right = arr.slice(temp)
        arr = right.concat(left)
    }
    return arr[0]
};