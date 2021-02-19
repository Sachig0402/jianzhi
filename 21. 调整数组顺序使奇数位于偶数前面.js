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





// 我的方法,还是别用这种
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