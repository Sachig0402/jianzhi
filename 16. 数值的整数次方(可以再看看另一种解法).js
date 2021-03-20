// !下面重写的是一样的
var myPow = function (x, n) {
    // if (n == 0) return 1
    // if (n == 1) return x
    let isNegative = (n < 0)
    let result = cal(x, Math.abs(n))

    function cal(a, b) {
        // 因为要递归调用cal函数,所以必须有下面这两行
        if (b == 0) return 1
        if (b == 1) return a

        let subResult = cal(a, Math.floor(b / 2))
        if (b % 2) {
            subResult = subResult * subResult * a
        } else {
            subResult = subResult * subResult
        }
        return subResult
    }

    if (!isNegative) {
        return result
    } else {
        return 1 / result
    }

    return isNegative ? 1 / result : result
};


myPow(2, 10)

// ! 重写了一遍一样的
var myPow = function (x, n) {

    let mark = 0
    if (n < 0) mark = 1
    let res = posiPow(x, Math.abs(n))

    function posiPow(x, n) {
        if (n == 0) return 1
        if (n == 1) return x

        let a = parseInt(n / 2), b = n % 2
        let temp = posiPow(x, a)
        if (b) {
            return temp * temp * x
        } else {
            return temp * temp
        }
    }

    if (mark) {
        res = 1 / res
    }
    return res
};