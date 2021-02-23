var validateStackSequences = function (pushed, popped) {
    let len = pushed.length
    let stack = []
    let count = 0
    for (let i = 0; i < len; i++) {
        stack.push(pushed[i])

        while (stack.length !== 0 && popped[count] === stack[stack.length - 1])
        // 注意上面这行用的是while循环,即弹出一个后,会继续看前一个是否也需要弹出
        {
            stack.pop()
            count++
        }
    }

    return (!stack.length)
};


console.log(validateStackSequences([1, 2, 3, 4, 5], [4, 3, 5, 2, 1]))