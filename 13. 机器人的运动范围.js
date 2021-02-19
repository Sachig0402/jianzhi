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