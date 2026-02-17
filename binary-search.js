/**
 *  A naive solution with Linear Search will not be useful for array sorted to identify the elements index, 
 * because it will check every element during each iteration, time complexity is O(N)
 * 
 * Efficient solution is Binary Search and Efficient time complexity is O(log N).
 * In this solution we are going to reduce the input array size to half in every iteration of binary search.
 * The idea of the binary search is to compare the element to be searched with the middle of the list.
 *  
 */

// naive solution

function binarySearchNaive(arr,x) {
    let n = arr.length - 1;

    for(let i=0; i<=n; i++) {
        if(arr[i] === x)
            return i;
    }
}

let array1 = [10, 20, 30, 40, 50, 60, 70];
let x1 = 30;
const response1 = binarySearchNaive(array1,x1);
console.log(response1);

// Efficient solution

function binarySearchEfficient(arr,x) {
    let low = 0;
    let high = arr.length-1;

    while(low <= high) { // after first iteration low=4 <= high=6
        let mid = Math.floor((low+high)/2); // 3 -> after first iteration 4+6/2=5

        if(arr[mid] == x) {
            return mid; // if mid 5 means at 5th index array holding the search value so it returns the index of the searching value.
        }
        else if(arr[mid] < x) {
            console.log("else if loop")
            low = mid + 1; // 4
        }
        else {
            console.log("else loop")
            high = mid - 1; 
        }
    }
    return -1;
}

let array2 = [10, 20, 30, 40, 50, 60, 70];
let x2 = 60;
const response2 = binarySearchEfficient(array2,x2);
console.log(response2);
