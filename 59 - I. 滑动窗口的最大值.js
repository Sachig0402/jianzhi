/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
// 法一 暴力法 时间复杂度O(kn)
var maxSlidingWindow = function (nums, k) {
    if (!nums.length) return []
    if (k === 1) return nums
    let arr = []
    for (let i = 0; i < nums.length - k + 1; i++) {
        let max = nums[i]
        for (let j = i + 1; j < i + k; j++) {
            if (nums[j] > max) {
                max = nums[j]
            }
        }
        arr.push(max)
    }
    return arr
};

// 暴力法2 别人写的 这个更慢
var maxSlidingWindow = function (nums, k) {
    if (!nums.length) return []
    let arr = []
    for (let i = 0; i < nums.length - k + 1; i++) {
        arr.push(Math.max(...nums.slice(i, i + k)))
    }
    return arr
};

// 法二 单调队列法
// ! 官方解析的法二
// ! https://leetcode-cn.com/problems/sliding-window-maximum/solution/hua-dong-chuang-kou-zui-da-zhi-by-leetco-ki6m/
var maxSlidingWindow = function (nums, k) {
    const n = nums.length;
    const q = [];//*queue,暂时用来记录的队列,里面记录的都是角标,即元素位置
    for (let i = 0; i < k; i++) {
        while (q.length && nums[i] >= nums[q[q.length - 1]]) {//*队列不空且新值比原队尾的值大
            // * q[x]记录的是nums的下标,所以上面nums[q[x]]是nums里的元素值
            // * 用>号也可以,不一定用>=
            q.pop();//* 那么原来队尾的值就要弹出,while循环,相当于原队列中所有比新值小的都弹出
        }
        q.push(i);//*把新的i压入
    }
    // !上面操作的是第一个滑动窗口

    const ans = [nums[q[0]]];
    //*ans是记录每个窗口里最大值的数组,上面已经完成第一个窗口了,所以把nums[q[0]](即第一个窗口的最大值)压入
    for (let i = k; i < n; i++) {//*开始操作后面的窗口
        while (q.length && nums[i] >= nums[q[q.length - 1]]) {
            // * 用>号也可以,不一定用>=
            q.pop();//*与第一个窗口的操作类似
        }
        q.push(i);
        //*后面的操作是与第一个窗口不同的
        while (q[0] <= i - k) {//*如果窗口划过去了
            // ! 上面这行不一定用while,用if也可以,因为每次只新增一个值,查一遍即可
            q.shift();//*就把前面的元素弹出
        }
        ans.push(nums[q[0]]);//*ans压入最大值
    }
    return ans;
};


