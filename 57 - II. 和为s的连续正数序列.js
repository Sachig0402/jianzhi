// 假设输入n为16

// 16/x 是中位数
// x是几个连续数
// 中位数应该大于x/2

// 设x为奇数
// 16/x就是中间那个数
// 16/x>=(x+1)/2
// n*2>=x^2+x
// x^2+x-2n<=0
// x=(-1+Math.sqrt(1+8n))/2



// 设x为偶数
// parseInt(16/x)是中间靠左的那个数
// parseInt(16/x)>=x/2
// 16/x>=x/2
// 即x^2=<16*2
// x<Math.sqrt(n*2)


/**
 * @param {number} target
 * @return {number[][]}
 */
// 法一 我想的,很慢
var findContinuousSequence = function (target) {
    let res = []
    // let base = Math.floor(Math.sqrt(2 * target))
    // for (let i = 2; i <= Math.sqrt(2 * target) + 1; i++) {
    for (let i = Math.floor(Math.sqrt(2 * target)); i >= 2; i--) {
        if (i % 2) {// i是奇数
            if (!(target % i)) {//i能整除target
                let a = target / i
                let temp = []
                for (let t = -parseInt(i / 2); t <= parseInt(i / 2); t++) {
                    temp.push(a + t)
                }
                res.push(temp)
            }
        } else if (!(i % 2)) {//i是偶数
            if ((target / i) == (Math.floor(target / i) + 0.5)) {
                let a = Math.floor(target / i)
                let temp = []
                for (let t = -i / 2 + 1; t <= i / 2; t++) {
                    temp.push(a + t)
                }
                res.push(temp)
            }
        }
    }
    return res
};

// ! 法二 滑动窗口 别人的做法
/* 解题思路
先把数分解9=1+8=2+7=3+6=4+5,按这种，找到可能组成正确结果的数组，根据数的结构，易知结果可能存在[1,2,3,4,5]中，不难发现数组最后一个数,如果target是偶数就是target/2,如果是奇数就是target/2取整加一，即Math.floor(target/2)+1 或采用二进制取整(target/2 | 0) + 1,再对找到的数组采用滑动窗口模型，找出答案。

作者：minCoding
链接：https://leetcode-cn.com/problems/he-wei-sde-lian-xu-zheng-shu-xu-lie-lcof/solution/javascripthua-dong-chuang-kou-hen-rong-yi-li-jie-d/
来源：力扣（LeetCode）
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。 */
var findContinuousSequence = function (target) {
    let index = Math.floor(target / 2) + 1
    let sum = 0, temp = [], res = []
    for (let i = 1; i <= index; i++) {
        temp.push(i)
        sum += i
        while (sum > target) {
            // let a = temp.shift()
            // sum -= a
            sum -= temp[0]
            temp.shift()
        }
        if ((sum === target) && (temp.length >= 2)) {
            res.push([...temp])
        }
    }
    return res
};