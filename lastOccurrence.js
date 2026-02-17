// efficient approach - recursive method

const last1 = (arr, low, high, x, n) => {
  if (high >= low) {
    const mid = low + Math.floor((high - low) / 2);
    if ((mid === n - 1 || x < arr[mid + 1]) && arr[mid] === x) {
      return mid;
    } else if (x < arr[mid]) {
      return last1(arr, low, mid - 1, x, n);
    } else {
      return last1(arr, mid + 1, high, x, n);
    }
  }
  return -1;
};

const arr = [1, 2, 2, 2, 2, 3, 4, 7, 8, 8];
const n = arr.length;
const x = 8;
console.log("Last Occurrence = " + last1(arr, 0, n - 1, x, n)); // 9
// Time Complexity: O(log n)  and Auxiliary Space: O(1)


// more efficient approach - iteration method

// const arr = [1, 2, 2, 2, 2, 3, 4, 7, 8, 8];
// const n = arr.length;
// const x = 8;

function last2(arr, x, n) {
  let low = 0;
  let high = n - 1;
  let res = -1;
  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    if (arr[mid] > x) {
      high = mid - 1;
    } else if (arr[mid] < x) {
      low = mid + 1;
    } else {
      res = mid;
      low = mid + 1;
    }
  }
  return res;
}

console.log(`Last Occurrence = ${last2(arr, x, n)}`); // 9
// Time Complexity: O(log n)  and Auxiliary Space: O(1)