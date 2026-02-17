

// efficient way using binary search approach


/**
 * 
 * Given an infinite sorted array consisting 0s and 1s. The problem is to find the index of first ‘1’ in that array. 
 * As the array is infinite, therefore it is guaranteed that number ‘1’ will be present in the array.
 * 
 * Approach: The problem is closely related to the problem of finding position of an element in a sorted array of infinite numbers. 
 * As the array is infinite, therefore we do not know the upper and lower bounds between which we have to find the occurrence of first ‘1’. 
 * 
 * 
    Input : arr[] = {0, 0, 1, 1, 1, 1} 
    Output : 2

    Input : arr[] = {1, 1, 1, 1,, 1, 1}
    Output : 0
 * 
 *
 * Below is an algorithm to find the upper and lower bounds.
 * 
    posOfFirstOne(arr)
        Declare l = 0, h = 1
        while arr[h] == 0
            l = h
        h = 2*h;
        return indexOfFirstOne(arr, l, h)
    }
 * 
 * Here h and l are the required upper and lower bounds. indexOfFirstOne(arr, l, h) is used to find the index of occurrence of first ‘1’ between these two bounds.
 * 
 * 
 */

function indexOfFirstOne(arr, low, high) {
  
  let mid;
  while (low <= high) {
    mid = Math.floor((low + high) / 2);
    if (arr[mid] === 1 && (mid === 0 || arr[mid - 1] === 0)) break;
    if (arr[mid] === 1) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return mid;
}

function posOfFirstOne(arr) {
  let l = 0;
  let h = 1;
  while (arr[h] === 0) {
    l = h;
    h = 2 * h;
  }
  return indexOfFirstOne(arr, l, h);
}

const arr = [0, 0, 1, 1, 1, 1];
console.log("Index = ", posOfFirstOne(arr)); // Index = 2

/**
 * 
 * Let p be the position of element to be searched. 
 * Number of steps for finding high index ‘h’ is O(Log p). 
 * The value of ‘h’ must be less than 2*p. The number of elements between h/2 and h must be O(p). 
 * Therefore, time complexity of Binary Search step is also O(Log p) and 
 * overall time complexity is 2*O(Log p) which is O(Log p).
 * 
 * 
 */