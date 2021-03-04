/**
 * initialize your data structure here.
 */
// 一 暴力解法
var MedianFinder = function () {
    this.data = []
};

/** 
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function (num) {
    this.data.push(num)
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function () {
    let len = this.data.length
    if (len == 0) return null
    if (len == 1) return this.data[0]
    this.data.sort((x, y) => { return x - y })

    if (len % 2) {
        return this.data[(len - 1) / 2]
    } else if (len % 2 == 0) {
        return (this.data[(len / 2) - 1] + this.data[len / 2]) / 2
    }
};

/**
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */


//  二 二分插入法
/**
 * initialize your data structure here.
 */
var MedianFinder = function () {
    this.data = []
};

/** 
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function (num) {
    if (this.data.length == 0) {
        this.data.push(num)
    } else {
        let left = 0, right = this.data.length - 1
        while (left <= right) {
            let mid = Math.floor((left + right) / 2)
            if (this.data[mid] == num) {
                this.data.splice(mid, 0, num)
            } else if (this.data[mid] < num) {
                left = mid + 1
            } else {
                right = mid - 1
            }
        }
        this.data.splice(right + 1, 0, num)
    }


};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function () {
    let len = this.data.length
    if (!len) {
        return null
    } else if (len % 2) {
        return (this.data[(len - 1) / 2])
    } else {
        return ((this.data[len / 2 - 1] + this.data[len / 2]) / 2)
    }
};

/**
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */