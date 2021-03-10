/**
 * @param {string} s
 * @return {string}
 */
// 法一 
var reverseWords = function (s) {
    s = s.trim()
    let arr = s.split(/\s+/) //正则表达式还要复习
    // let arr = s.split(/[ ]+/)   //这个也行
    arr.reverse()
    return arr.join(' ')
};