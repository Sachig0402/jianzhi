/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
var getLeastNumbers = function (arr, k) {
    arr.sort((a, b) => { return a - b })
    return arr.slice(0, k)//第0位到第k位之前(不包括k)
    // splice也行(第0位开始的k位)
};