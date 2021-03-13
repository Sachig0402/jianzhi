var fib = function (n) {
    //超时
    // if(n==0){
    //     return 0;
    // }else if(n==1){
    //     return 1;
    // }else{
    //     return(fib(n-1)+fib(n-2))
    // }


    let a = 0, b = 0, c = 1;
    if (n <= 1) {
        return n;
    } else {
        while (--n > 0) {
            a = b;
            b = c;
            c = (a + b) % 1000000007;
        }
        return c
    }
};

// *自己想的动态规划
var fib = function (n) {

    let dp = [0, 1]
    for (let i = 2; i <= n; i++) {
        dp[i] = (dp[i - 1] + dp[i - 2]) % 1000000007
    }
    return dp[n]
};



//为什么这个耗时短
var fib2 = function (n) {
    let dp = [0, 1]
    function f(n) {
        if (dp[n] != undefined) {
            return dp[n];
        }
        dp[n] = f(n - 1) + f(n - 2);
        return dp[n] % 1000000007;
    }
    return f(n);
}