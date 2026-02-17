

function countOnes(arr, n) {
    let low = 0, high = n - 1;
    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        if (arr[mid] === 0) {
            low = mid + 1;
        } else {
            if (mid === 0 || arr[mid - 1] === 0) {
                return (n - mid);
            } else {
                high = mid - 1;
            }
        }
    }
    return 0;
}

let arr = [0, 0, 1, 1, 1, 1], n = 6;
console.log(countOnes(arr, n)); // 4

// Time complexity: O(Log(N)) and Auxiliary Space: O(1)