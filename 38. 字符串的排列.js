
// 回溯 看了别人的
// !重新看又不会了
/**
 * @param {string} s
 * @return {string[]}
 */
var permutation = function (s) {
    if (!s) return []
    if (s.length == 1) return [s]

    let list = s.split('')//注意 按xx分开是split
    let result = []

    function permutationCore(list, start) {
        if (start == list.length) {
            result.push(list.join(''))
        }
        let aSet = new Set()
        for (let i = start; i < list.length; i++) {
            if (aSet.has(list[i])) continue
            aSet.add(list[i])

            let temp = list[start]
            list[start] = list[i]
            list[i] = temp

            permutationCore(list, start + 1)

            //* 再交换回来
            temp = list[start]
            list[start] = list[i]
            list[i] = temp
        }
    }

    permutationCore(list, 0)

    return result
};