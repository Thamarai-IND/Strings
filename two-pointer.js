/**
 * 
 * Find if there is a pair with sum X in a sorted array
 * Input: arr = [ 2, 5, 8, 12, 30 ] and Sum X = 17
 * Output: result = TRUE; // [ 5, 12 ] - Pair found which is equal to the Sum
 * 
 * Input: arr = [ 3, 8, 13, 18 ] and Sum X = 26
 * Output: result = TRUE; // [ 8, 18 ] - Pair found which is equal to the Sum
 * 
 * Input: arr = [ 3, 8, 13, 18 ] and Sum X = 1
 * Output: result = FALSE; // [ ] - No Pair found to match the Sum
 * 
 */

// Naive Solution - Generate all pairs and check for sum of every pair

function twoPointerNaive(arr, sum) {
    for(let i=0; i<arr.length; i++) {
        for(let j=i+1; j<arr.length; j++) {
            console.log(` ( ${arr[i]} , ${arr[j]} )`);
            if((arr[i] + arr[j]) == sum) {
                return true;
            }
        }
    }
    return false
}

let arr = [ 2, 5, 8, 10, 30 ], sum = 40;
console.log(twoPointerNaive(arr,sum) ? ' Pair is found and match with sum ' : ' Pair in not found ');
// Time Complexity : O(N^2) and Space Complexity : O(1)