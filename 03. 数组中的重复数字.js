// 1 基本方法
var findRepeatNumber = function (nums) {
    for (let i = 0; i < nums.length - 1; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] == nums[j]) {
                return nums[i];
            }
        }
    }
};

// 2 set
var findRepeatNumber = function (nums) {
    let s = new Set();

    for (let i in nums) {//for in循环遍历的是下标0,1,2,3
        // let l=s.size;
        s.add(nums[i]);
        if (s.size == i) {// 或者 if(s.size==l)
            return nums[i];
        }
    }
};

// 3 哈希表
var findRepeatNumber = function (nums) {
    var a=[];
    for(var b of nums){
        if(!a[b]){
            a[b]=true;
        }else{
            return b;
        }
    }
};
