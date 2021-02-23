/**
 * initialize your data structure here.
 */
var MinStack = function () {
    this.dataStack = []
    this.minStack = []
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function (x) {
    this.dataStack.push(x)
    let length = this.minStack.length
    if (!length) this.minStack.push(x)
    else if (this.minStack[length - 1] >= x) this.minStack.push(x)
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
    let length1 = this.dataStack.length, length2 = this.minStack.length
    if (this.dataStack[length1 - 1] == this.minStack[length2 - 1]) this.minStack.pop()
    this.dataStack.pop()
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
    let length = this.dataStack.length
    if (!length) return null
    else return this.dataStack[length - 1]
};

/**
 * @return {number}
 */
MinStack.prototype.min = function () {
    let length = this.minStack.length
    if (!length) return null
    else return this.minStack[length - 1]
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.min()
 */