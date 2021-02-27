function search(arr, key) {
    let low = 0, high = arr.length - 1
    while (low <= high) {
        let mid = parseInt((low + high) / 2)
        if (key === arr[mid]) {
            return mid
        } else if (key > arr[mid]) {
            low = mid + 1
        } else if (key < arr[mid]) {
            high = mid - 1
        } else {
            return -1
        }
    }
    return -1
}

let arr = []
console.log(search(arr, 2))
