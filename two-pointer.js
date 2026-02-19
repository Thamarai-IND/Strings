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


// efficient solution - we move i and j toward each other and ignore the elements

/**
 * 
 * 
    🔹 How the Algorithm Works

    Initialization:

        => i starts at the beginning (0 index).
        => j starts at the end (arr.length - 1 index).

    Loop until pointers meet:

        => While i < j, check the sum of arr[i] + arr[j].

    Three possible cases: 

        => Case 1: Equal to target sum → return true.
        => Case 2: Less than target sum → move i forward (i++) to increase the sum.
        => Case 3: Greater than target sum → move j backward (j--) to decrease the sum.

    Exit condition

        => If no pair is found by the time i >= j, return false.
 * 
 * 
 * 
 * 
    Step-by-Step Execution: 
    
    Start: i=0 (2), j=6 (30) → sum = 32 (> 18) → move j--.
    Now: i=0 (2), j=5 (20) → sum = 22 (> 18) → move j--.
    Now: i=0 (2), j=4 (15) → sum = 17 (< 18) → move i++.
    Now: i=1 (5), j=4 (15) → sum = 20 (> 18) → move j--.
    Now: i=1 (5), j=3 (10) → sum = 15 (< 18) → move i++.
    Now: i=2 (8), j=3 (10) → sum = 18 (= target) → ✅ Pair found!
 * 
 * 
 * 
 */

function isTwoPointer(arr,sum) {
    let i = 0, j = arr.length - 1;

    while( i < j ) {
        if((arr[i] + arr[j]) == sum)
            return true
        else if((arr[i] + arr[j]) < sum)
            i++;
        else
            j--;
    }
    return false;
}

let array = [ 2, 5, 8, 10, 15, 20, 30 ], sum2 = 18;
console.log(isTwoPointer(array,sum2) ? ' Pair is found and match with sum ' : ' Pair in not found ');
// Time Complexity : O(N^2) and Space Complexity : O(1)
