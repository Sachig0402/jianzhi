/**
 * @param {string} s
 * @return {character}
 */
var firstUniqChar = function (s) {
    if (!s.length) {
        return ' '
    }
    let aMap = new Map()
    for (let item of s) {
        if (aMap.has(item)) {
            aMap.set(item, aMap.get(item) + 1)
        } else {
            aMap.set(item, 1)
        }
    }

    for (let key of aMap.keys()) {//注意是aMap.keys(),别忘了括号()
        if (aMap.get(key) == 1) {
            return key
        }
    }
    return ' '

};