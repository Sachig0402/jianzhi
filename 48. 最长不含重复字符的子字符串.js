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