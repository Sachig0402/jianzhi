/**
 * @param {number[]} nums
 * @return {number[]}
 */
// 法一 哈希表
// 空间复杂度好像不满足
var singleNumbers = function (nums) {
    let aMap = new Map(), res = []
    for (let i of nums) {
        aMap[i] = (aMap[i] || 0) + 1 //数字第一次放入,该位置赋值为1,第二次就会变成2了,没有的位置为null
    }
    for (let key in aMap) {//key是下标
        if (aMap[key] == 1) {//aMap[key]的值可能是1,2,null
            res.push(key)
        }
    }
    return res
};


// 法二 按位异或
// 如果数组里只有一个数字只出现过一次,则按位异或就得到了这个数字
// 如果有两个数字只出现过一次,则将数组分组,设法使两个数字分到不同组中
// 所有数按位异或得到的是 num1^num2,因为其他值都有两个,按位异或得到0,num1^num2设为a
// 因为num1!=num2,至少有几位不同,一个为1一个为0,异或得到1,所以按这位是1还是0可将数组分为两组,这两个单独的值一定能被分开
// 所以这个结果一定有一位或几位为1,找到任意一个为1的位即可,本解选择从右向左找
var singleNumbers = function (nums) {
    let a = 0
    nums.forEach((item) => {
        a ^= item //按位异或 ^是异或运算符 相当于a=a^item,因为除了两个值,其余都出现两次,一个值异或本身得到0
        // 所以按位异或得到的结果就是这两个单独的值异或运算的结果
    })
    let mark = 1
    while ((mark & a) == 0) {//如a为00010100,从右往左找a中第一个值为1的位,
        // !上面这行注意加括号!!不加括号就错了
        mark <<= 1 //mark从1开始,左移一位得到10,再左移一位得到100,得到的是100,mark总是一个只有一位为1其余位都为0的值
        // 所以一个数和mark做按位与运算能够得到这个数在mark的1位的值是0还是1
    }
    let b = 0, c = 0
    nums.forEach((item) => { //将元素分组,这位为1的分一组,这位为0的分一组
        if ((item & mark) == 0) {//这位为0
            // !上面这行注意加括号!!不加括号就错了
            b ^= item
        } else {//这位为1
            c ^= item
        }
    })
    return [b, c]
};