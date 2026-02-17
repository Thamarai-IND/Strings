// efficient solution

function first(arr, x, n) {
  let low = 0;
  let high = n - 1;
  let res = -1;
  while (low <= high) {
    // Normal Binary Search Logic
    let mid = Math.floor((low + high) / 2);
    if (arr[mid] > x) {
      high = mid - 1;
    } else if (arr[mid] < x) {
      low = mid + 1;
    } else {
      res = mid;
      high = mid - 1;
    }
  }
  return res;
}

let arr = [1, 2, 2, 2, 2, 3, 4, 7, 8, 8];
let n = arr.length;

let x = 8;
console.log(`First Occurrence = ${first(arr, x, n)}`); // first occurrence at index 8

// Time Complexity: O(log n) and Auxiliary Space: O(1)


// An Iterative Implementation of Binary Search Solution : more efficient

function first2(arr, x, n) {
  let low = 0;
  let high = n - 1;
  let res = -1;
  while (low <= high) {
    // Normal Binary Search Logic
    let mid = Math.floor((low + high) / 2);
    if (arr[mid] > x) {
      high = mid - 1;
    } else if (arr[mid] < x) {
      low = mid + 1;
    } else {
      res = mid;
      high = mid - 1;
    }
  }
  return res;
}

let arr2 = [1, 2, 2, 2, 2, 3, 4, 7, 7, 8, 8];
let n2 = arr.length;

let x2 = 7;
console.log(`First Occurrence = ${first2(arr2, x2, n2)}`);

// Time Complexity: O(log n)  and Auxiliary Space: O(1) 