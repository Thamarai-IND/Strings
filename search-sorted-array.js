// naive approach

/** Search in Sorted Rotated Array
 * 
 * Given a sorted and rotated array arr[] of size N and a key, the task is to find the key in the array.
 * Note: Find the element in O(logN) time and assume that all the elements are distinct.
 * 
    Input  : arr[] = {5, 6, 7, 8, 9, 10, 1, 2, 3}, key = 3
    Output : Found at index 8

    Input  : arr[] = {5, 6, 7, 8, 9, 10, 1, 2, 3}, key = 30
    Output : Not found

    Input : arr[] = {30, 40, 50, 10, 20}, key = 10   
    Output : Found at index 3
 * 
 * 
 * 
 * 
 */

let arr = [100, 200, 400, 1000, 10, 20];
let n = arr.length;
let x = 10;

const search = (arr, n, x) => {
    for (let i = 0; i < n; i++) {
        if (arr[i] === x) {
            return i;
        }
    }
    return -1;
};

console.log(search(arr, n, x)); // 4

// Time Complexity: O(N) and Space Complexity: O(1)

// efficient approach - using binary search

const search2 = (arr, n, x) => {
  let low = 0;
  let high = n - 1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    if (arr[mid] === x) {
      return mid;
    }
    if (arr[low] < arr[mid]) {
      if (x >= arr[low] && x < arr[mid]) {
        high = mid - 1;
      } else {
        low = mid + 1;
      }
    } else {
      if (x > arr[mid] && x <= arr[high]) {
        low = mid + 1;
      } else {
        high = mid - 1;
      }
    }
  }

  return -1;
};

const arr2 = [10, 20, 40, 60, 5, 8];
const n2 = 6;
const x2 = 5;

console.log(search2(arr2, n2, x2)); // 4

// Time Complexity: O(Log(N)) and Space Complexity: O(1)