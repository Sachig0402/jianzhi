/* var printNumbers = function (n) {
    let res = 0;
    let arr = []
    for (let i = 0; i < n; i++) {
        res += 9 * Math.pow(10, i)
    }
    for (let j = 1; j <= res; j++) {
        arr.push(j)
    }
    return arr
}; */

var printNumbers = function (n) {
    let arr = []
    for (let i = 1; i < Math.pow(10, n); i++) {
        arr.push(i)
    }
    return arr
};