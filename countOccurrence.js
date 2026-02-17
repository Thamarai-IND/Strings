/**
 * 
 *  Count Occurrence Sorted - Given a sorted array arr[] and a number x, write a function that counts the occurrences of x in arr[]. Expected time complexity is O(Logn) 
 * 
    Input: arr[] = {1, 1, 2, 2, 2, 2, 3,},   x = 2
    Output: 4 // x (or 2) occurs 4 times in arr[]

    Input: arr[] = {1, 1, 2, 2, 2, 2, 3,},   x = 3
    Output: 1 

    Input: arr[] = {1, 1, 2, 2, 2, 2, 3,},   x = 1
    Output: 2 

    Input: arr[] = {1, 1, 2, 2, 2, 2, 3,},   x = 4
    Output: -1 // 4 doesn't occur in arr[] 

 * 
 */



// find first occurrence in an array    

function firstOcc(arr, n, x) {
  let low = 0;
  let high = n - 1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    if (x > arr[mid]) {
      low = mid + 1;
    } else if (x < arr[mid]) {
      high = mid - 1;
    } else {
      if (mid === 0 || arr[mid - 1] !== arr[mid]) {
        return mid;
      } else {
        high = mid - 1;
      }
    }
  }

  return -1;
}


// find last occurrence in an array  

function lastOcc(arr, n, x) {
  let low = 0;
  let high = n - 1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    if (x > arr[mid]) {
      low = mid + 1;
    } else if (x < arr[mid]) {
      high = mid - 1;
    } else {
      if (mid === n - 1 || arr[mid + 1] !== arr[mid]) {
        return mid;
      } else {
        low = mid + 1;
      }
    }
  }

  return -1;
}


// find the count of all occurrence in an array  

function countOcc(arr, n, x) {
  let first = firstOcc(arr, n, x);

  if (first === -1) {
    return 0;
  } else {
    return lastOcc(arr, n, x) - first + 1;
  }
}

let arr = [10, 20, 20, 20, 40, 40];
let n = 6;
let x = 20;

console.log(countOcc(arr, n, x)); // 3

// Time Complexity : O(Log n) and Space Complexity: O(1)