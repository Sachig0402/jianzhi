/**
 * @param {number[]} a
 * @return {number[]}
 */
// ! 别人的思路我默写 但是自己写得复杂了,left和right可以合在一个循环里写
var constructArr = function (a) {
    let left = [], right = [], b = []
    for (let i = 0; i < a.length; i++) {
        if (i === 0) {
            left[i] = a[i]
        } else {
            left[i] = a[i] * left[i - 1]
        }
    }
    for (let j = a.length - 1; j >= 0; j--) {
        if (j === a.length - 1) {
            right[j] = a[j]
        } else {
            right[j] = a[j] * right[j + 1]
        }
    }

    for (let i = 0; i < a.length; i++) {
        if (i === 0) {
            b[i] = right[i + 1]
        } else if (i === a.length - 1) {
            b[i] = left[i - 1]
        } else {
            b[i] = left[i - 1] * right[i + 1]
        }
    }

    return b
};

// ! 别人的 其实就是上面的简化一下
var constructArr = function (a) {
    let left = [], right = [], b = []
    for (let i = 0; i < a.length; i++) {
        let j = a.length - 1 - i
        if (i === 0) {
            left[i] = a[i]
            right[j] = a[j]
        } else {
            left[i] = a[i] * left[i - 1]
            right[j] = a[j] * right[j + 1]
        }
    }

    for (let i = 0; i < a.length; i++) {
        if (i === 0) {
            b[i] = right[i + 1]
        } else if (i === a.length - 1) {
            b[i] = left[i - 1]
        } else {
            b[i] = left[i - 1] * right[i + 1]
        }
    }

    return b
};
