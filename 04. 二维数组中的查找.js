// 1. 数组扁平化
var findNumberIn2DArray = function (matrix, target) {
    return matrix.flat(Infinity).includes(target);
};

// 2. 螃蟹走法
var findNumberIn2DArray = function (matrix, target) {
    if (matrix.length == 0) {
        return false
    }
    let [i,j]=[0,matrix[0].length-1];
    while(i<=matrix.length-1&&j>=0){
        if(matrix[i][j]<target){
            i++;
        }else if(matrix[i][j]>target){
            j--;
        }else{
            return true;
        }
    }
    return false;
}