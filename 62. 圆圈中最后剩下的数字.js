/**
 * @param {number} n
 * @param {number} m
 * @return {number}
 */
// ! 我自己想的,超出时间限制了
var lastRemaining = function (n, m) {
    let arr = [], temp = m
    for (let i = 0; i < n; i++) {
        arr[i] = i
    }
    for (let i = n; i > 1; i--) {
        if (m > i) temp = m % i
        if (temp == 0) {
            arr = arr.slice(0, arr.length - 1)
        } else {
            let left = arr.slice(0, temp - 1)
            let right = arr.slice(temp)
            arr = right.concat(left)
        }
    }
    return arr[0]
};

lastRemaining(94, 46)

// ! 法一,最好用法二
var lastRemaining = function (n, m) {
    let arr = [], temp = m
    for (let i = 0; i < n; i++) {
        arr[i] = i
    }
    let cur = -1
    while (arr.length > 1) {
        cur += m
        if (cur > arr.length - 1) {
            cur = cur % arr.length
        }
        arr.splice(cur, 1)
        cur--
    }
    return arr[0]
};


// ! 法二 约瑟夫公式 f(n,m)=(f(n-1,m)+m)%n
var lastRemaining = function (n, m) {
    let res = 0 //若n=1,则返回0号位置的元素
    for (let i = 2; i <= n; i++) {
        res = (res + m) % i
    }
    return res
};