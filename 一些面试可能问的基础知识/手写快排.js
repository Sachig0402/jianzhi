function quickSort(arr) {
    if (arr.length <= 1) {
        return arr
    }
    let mid = Math.floor(arr.length / 2)
    let base = arr.splice(mid, 1)[0]//splice返回值是一个数组,数组里是删除的值,本题中只有一个数
    let left = [], right = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < base) {
            left.push(arr[i])
        } else {
            right.push(arr[i])
        }
    }
    return quickSort(left).concat([base], quickSort(right))
}


console.log(quickSort([10, 10, 1, 2, 4, 6, 7, 89, 7, 4]))