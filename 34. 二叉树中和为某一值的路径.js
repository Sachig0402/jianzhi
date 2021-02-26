var pathSum = function (root, sum) {
    if (!root) return []
    let stack = [], temp = []

    let dfs = function (root, sum, stack, temp) {
        if (!root) return
        sum -= root.val
        // temp=[...temp,root.val]
        temp.push(root.val)
        if (sum == 0 && root.left == null && root.right == null) stack.push(temp)
        dfs(root.left, sum, stack, [...temp])//注意这些地方调用时要解构赋值,这样才是深复制,数组都是指针,浅复制,会改变原本的temp
        dfs(root.right, sum, stack, [...temp])//注意这些地方调用时要解构赋值,这样才是深复制,数组都是浅复制,会改变原本的temp
    }

    dfs(root, sum, stack, [...temp])//注意这些地方调用时要解构赋值,这样才是深复制,数组都是浅复制,会改变原本的temp
    return stack



    // 或者
    // if (!root) return []
    // let stack = [], temp = []

    // let dfs = function (root, sum, stack, temp) {
    //     if (!root) return
    //     sum -= root.val
    //     temp=[...temp,root.val]
    //     if (sum == 0 && root.left == null && root.right == null) stack.push(temp)
    //     dfs(root.left, sum, stack, temp)
    //     dfs(root.right, sum, stack, temp)
    // }

    // dfs(root, sum, stack, temp)
    // return stack




};