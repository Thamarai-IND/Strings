// naive approach

/**
 * 
 * Given an array arr[] of integers. 
 * Find a peak element i.e. an element that is not smaller than its neighbors. 
 * Note: For corner elements, we need to consider only one neighbor. 
 * 
 * 
    Input: array[]= {5, 10, 20, 15}
    Output: 20
    Explanation: The element 20 has neighbors 10 and 15, both of them are less than 20.

    Input: array[] = {10, 20, 15, 2, 23, 90, 67}
    Output: 20 or 90
    Explanation: The element 20 has neighbors 10 and 15, both of them are less than 20, similarly 90 has neighbors 23 and 67.

 * 
 * 
 * Naive Approach: 
 *  The array can be traversed and the element whose neighbors are less than that element can be returned.
 * 
 */

// A JavaScript program to find a peak element

// Find the peak element in the array
function findPeak(arr, n) {
	// first or last element is peak element
	if (n === 1) {
		return 0;
	}
	if (arr[0] >= arr[1]) {
		return 0;
	}
	if (arr[n - 1] >= arr[n - 2]) {
		return n - 1;
	}

	// check for every other element
	for (let i = 1; i < n - 1; i++) {
		// check if the neighbors are smaller
		if (arr[i] >= arr[i - 1] && arr[i] >= arr[i + 1]) {
			return i;
		}
	}
}

// Driver Code
const arr = [1, 3, 20, 4, 1, 0];
const n = arr.length;
console.log("Index of a peak point is " + findPeak(arr, n)); // Index of a peak point is 2


// Efficient approach - Find a peak element using iterative Binary search

/** 
 * 
 * Using Binary Search, check if the middle element is the peak element or not. 
 * If the middle element the peak element terminate the while loop and print middle element,
 * then check if the element on the right side is greater than the middle element then there is always a peak element on the right side. 
 * If the element on the left side is greater than the middle element then there is always a peak element on the left side. 
 * 
 * 
 */

// A JavaScript program to find a peak element

// A binary search based function
// that returns index of a peak element

function findPeak2(arr, n) {
  let l = 0;
  let r = n - 1;
  let mid;

  while (l <= r) {
    // finding mid by binary right shifting.
    mid = (l + r) >> 1;

    // first case if mid is the answer
    if ((mid === 0 || arr[mid - 1] <= arr[mid]) && (mid === n - 1 || arr[mid + 1] <= arr[mid])) {
      break;
    }

    // move the right pointer
    if (mid > 0 && arr[mid - 1] > arr[mid]) {
      r = mid - 1;
    }

    // move the left pointer
    else {
      l = mid + 1;
    }
  }

  return mid;
}

// Driver Code
let arr2 = [1, 3, 20, 4, 1, 0];
let N2 = arr.length;
console.log(`Index of a peak point is ${findPeak2(arr2, N2)}`); // Index of a peak point is 2

/**
 * 
 * Time Complexity: O(log N), Where n is the number of elements in the input array. 
 * In each step our search becomes half. So it can be compared to Binary search, 
 * So the time complexity is O(log N)
 * 
 * 
 * Auxiliary Space: O(1), No extra space is required, so the space complexity is constant.
 * 
 */