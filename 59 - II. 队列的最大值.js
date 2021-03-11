// 与上一题的单调队列法类似
var MaxQueue = function () {
    this.queue = []
    this.queue2 = []
};

/**
 * @return {number}
 */
MaxQueue.prototype.max_value = function () {
    if (!this.queue.length) return -1
    return this.queue2[0]
};

/** 
 * @param {number} value
 * @return {void}
 */
MaxQueue.prototype.push_back = function (value) {
    this.queue.push(value)
    while (this.queue2.length && (this.queue2[this.queue2.length - 1] < value)) {
        this.queue2.pop()
    }
    this.queue2.push(value)


};

/**
 * @return {number}
 */
MaxQueue.prototype.pop_front = function () {
    if (!this.queue.length) return -1
    let a = this.queue.shift()
    if (a === this.queue2[0]) {
        this.queue2.shift()
    }
    return a
};

/**
 * Your MaxQueue object will be instantiated and called as such:
 * var obj = new MaxQueue()
 * var param_1 = obj.max_value()
 * obj.push_back(value)
 * var param_3 = obj.pop_front()
 */