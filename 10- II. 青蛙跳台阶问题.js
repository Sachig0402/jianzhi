
var numWays = function (n) {
    if (n == 0 || n == 1) {
        return 1
    } else if (n == 2) {
        return 2
    } else {
        let arr = new Array(n + 1)
        arr[0] = 0;
        arr[1] = 1;
        arr[2] = 2;
        for (let i = 3; i <= n; i++) {
            arr[i] = (arr[i - 1] + arr[i - 2]) % 1000000007;
        }
        return arr[n]
    }
};

console.log(numWays(5))
