var movingCount = function (m, n, k) {
    function getSum(num) {
        let answer = 0;
        while (num) {
            answer = answer + num % 10;
            num = Math.floor(num / 10)
        }
        return answer
    }

    const directionArr = [[1, 0], [-1, 0], [0, 1], [0, -1]];
    let set = new Set(['0,0']);
    let queue = [[0, 0]];
    while (queue.length) {
        let [x, y] = queue.shift();
        for (let i = 0; i < 4; i++) {
            let offsetX = x + directionArr[i][0];
            let offsetY = y + directionArr[i][1];

            if (offsetX < 0 || offsetX >= m || offsetY < 0 || offsetY >= n || (getSum(offsetX) + getSum(offsetY)) > k || set.has(`${offsetX},${offsetY}`)) {
                continue;
            }
            set.add(`${offsetX},${offsetY}`);
            queue.push([offsetX, offsetY]);
        }
    };
    return set.size
}


// 我写的 不知道哪里错了
var movingCount = function (m, n, k) {
    function sumCal(a) {
        let sum = 0
        while (a) {
            sum += a % 10
            a = parseInt(a / 10)
        }
        return sum
    }

    let aSet = new Set()
    let queue = [[0, 0]]
    while (queue.length) {
        let [i, j] = queue.shift()
        if (i < 0 || i >= m || j < 0 || j > n || (sumCal(i) + sumCal(j) > k)) {
            continue
        }
        if ((i >= 0 && i < m && j >= 0 && j < n) && (sumCal(i) + sumCal(j) <= k)) {
            // else {
            aSet.add(`${i},${j}`)
            queue.push([i + 1, j], [i, j + 1])
        }

    }
    return aSet.size
}