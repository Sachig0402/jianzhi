/**
 * @param {number[]} nums
 * @return {number}
 */
// ! 法一 哈希表法
var singleNumber = function (nums) {
    let aMap = new Map()
    for (let i of nums) {
        aMap[i] = (aMap[i] || 0) + 1
    }
    for (let key in aMap) {
        if (aMap[key] == 1) {
            return key
        }
    }
};

// !法二 位运算
var singleNumber = function (nums) {
    let res = 0;
    for (let i = 0; i < 32; i++) {
        let cnt = 0;
        let bit = 1 << i;//* bit是000001000这种数
        for (let j = 0; j < nums.length; j++) {
            if (nums[j] & bit) cnt++;
            //* 把每个数都和bit与一下,这位如果是1,相当于就保留下来了,cnt++,因为绝大多数数都有三个,所以若要找的这唯一的数这位为0,则有cnt应为3的倍数,若有余数,则要找的这个数这位为1
        }

        // ! 上面这段可以写成下面这样
        // for (let value of nums) {
        //     if ((base & value) != 0) { //! 里面的括号别再忘了
        //         count++
        //     }
        // }

        if (cnt % 3 != 0) {
            res = res | bit;//*   | 是位或运算
        }
    }
    return res;
};
