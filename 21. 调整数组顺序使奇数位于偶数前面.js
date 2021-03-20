// 别人的方法
var exchange = function (nums) {
    let isOdd = function (num) {
        if (num % 2 == 1) {
            return true
        } else {
            return false
        }
    }

    if (!nums.length || (nums.length == 1)) {
        return nums
    }

    let left = 0, right = nums.length - 1

    while (left < right) {
        if (isOdd(nums[left]) && (left < nums.length)) {
            left++
            continue
        }
        if (!isOdd(nums[right]) && (right >= 0)) {
            right--
            continue
        }

        let temp = nums[left];
        nums[left] = nums[right]
        nums[right] = temp
        left++;
        right--;

    }

    return nums
};





// 我的方法1,还是别用这种
var exchange = function (nums) {
    let isOdd = function (num) {
        if (num % 2 == 1) {
            return true
        } else {
            return false
        }
    }

    if (!nums.length || (nums.length == 1)) {
        return nums
    }

    let left = 0, right = nums.length - 1

    while (1) {
        while (isOdd(nums[left]) & (left < nums.length)) {
            left++
        }
        while (!isOdd(nums[right]) & (right >= 0)) {
            right--
        }
        if (left < right) {
            let temp = nums[left];
            nums[left] = nums[right]
            nums[right] = temp
        } else {
            break
        }
    }

    return nums
};

// !我的方法2
var exchange = function (nums) {
    function isodd(num) {
        if (num % 2) {
            return 1
        } else {
            return 0
        }
    }

    let i = 0, j = nums.length - 1
    while (i < j) {
        while (isodd(nums[i]) && i < nums.length - 1) {
            i++
        }
        while (!isodd(nums[j]) && j > 0) {
            j--
        }
        if (i < j) {
            let temp = nums[i]
            nums[i] = nums[j]
            nums[j] = temp
            i++
            j--
        }
    }

    return nums
};