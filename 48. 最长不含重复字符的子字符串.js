/**
 * @param {string} s
 * @return {number}
 */
// 滑动窗口
var lengthOfLongestSubstring = function (s) {
    if (!s.length) return 0
    let len = s.length, str = '', max = 0
    for (let i = 0; i < len; i++) {
        let temp = str.indexOf(s[i])
        if (temp == -1) {
            str += s[i]
            if (str.length > max) {
                max = str.length
            }
        } else {
            str = str.slice(temp + 1)
            str += s[i]
        }
    }
    return max
};


//* 我自己想了个新方法,其实是类似的
var lengthOfLongestSubstring = function (s) {
    if (!s) return 0
    let i = 0, j = 1, max = 1
    let temp = s.slice(i, j)
    // for (; j < s.length + 1;) {
    while (j < s.length) {
        // temp = s.slice(i, j)
        if (temp.indexOf(s[j]) == -1) {
            j++
            temp = s.slice(i, j)
            if (temp.length > max) max = temp.length
        } else {
            i = i + temp.indexOf(s[j]) + 1
            j++
            temp = s.slice(i, j)
        }
    }
    return max

};