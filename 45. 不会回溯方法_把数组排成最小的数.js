var minNumber = function (nums) {
    // nums.forEach((x) => { x = String(x) })
    nums.sort(
        (x, y) => {
            if ('' + x + y > '' + y + x) {
                return 1
            } else {
                return -1
            }
        }
    )
    return nums.join('')
};

//! 改进
var minNumber = function (nums) {
    nums.sort((a, b) => {
        return ('' + a + b) - ('' + b + a)
    })
    return nums.join('')
};
