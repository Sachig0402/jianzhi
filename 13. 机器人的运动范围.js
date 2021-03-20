var movingCount = function (m, n, k) {
    function getSum(num) {
        let answer = 0
        while (num) {
            answer = answer + num % 10
            num = Math.floor(num / 10)
        }
        return answer
    }

    let queue = [[0, 0]]
    let aSet = new Set(['0,0'])
    // ! 不要往set结构中存数组,不能去重!包含[1,2]的set结构中add一个[1,2],会有两个[1,2]
    const directionArr = [[1, 0], [-1, 0], [0, 1], [0, -1]];
    while (queue.length) {
        let [x, y] = queue.shift();
        for (let i = 0; i < 4; i++) {
            let offsetX = x + directionArr[i][0];
            let offsetY = y + directionArr[i][1];

            if (offsetX < 0 || offsetX >= m || offsetY < 0 || offsetY >= n || (getSum(offsetX) + getSum(offsetY)) > k || aSet.has(`${offsetX},${offsetY}`)) {
                continue;
            }
            aSet.add(`${offsetX},${offsetY}`);
            queue.push([offsetX, offsetY]);
        }
    };

    return aSet.size

}


