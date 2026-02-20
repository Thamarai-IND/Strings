/**
 * 
 * Input: arr = [ 0, 2, 1, 3, 2, 2 ] and Output: 2
 * Input: arr = [ 1, 2, 3, 0, 3, 4, 5 ] and Output: 3
 * Input: arr = [ 0, 0 ] and Output: 0
 * Array Size >= 2
 * Only one element repeats (Any number of times)
 * All the elements from 0 to max(arr) are present
 * Therefore 0 <= max(arr) <= n-2
 * 
 * 
 * Time Complexity : O(N) and Space Complexity : O(1) and no modification to original Array 
 * 
 * 
 */

// Part 1

// Naive Solution logic
// let arr = [ 0, 2, 1, 3, 2, 2 ];
// for(let i=0; i<arr.length-1; i++) {
//     for(let j=i+1; j<arr.length; j++) {
//         if(arr[i]===arr[j])
//             return arr[i];
//     }
// }

// Super Naive Solution

// let array = [ 0, 1, 2, 2, 2, 3 ]
// for(let i=0; i<arr.length-1; i++) {
//     if(arr[i]===arr[i+1])
//             return arr[i];
// }

// Part 2

/**
 * 
 * Input: arr = [ 1, 3, 2, 4, 3, 3 ] and Output: 3
 * Input: arr = [ 1, 1 ] and Output: 1
 * Input: arr = [ 3, 4, 5, 1, 2, 4, 4 ] and Output: 4
 * 
 * 
 * All elements from 1 to max(arr) are present
 * 1<= max(arr) <= n-1
 * 
 * 
 */

// function findRepeating(arr) {
//     console.log("hi")
//     // Phase I
//     let slow = arr[0], fast = arr[0];
//     do {
//         slow = arr[slow];
//         fast = arr[arr[slow]];
//     } while (slow != fast);


//     // Phase II
//     slow = arr[0] + 1;
//     while (slow != fast) {
//         slow = arr[slow];
//         fast = arr[fast];
//     }
//     return slow;
// }
// let arr = [ 1, 3, 2, 4, 3, 3 ];
// findRepeating(arr);
/**
 * 
 * Working of Phase I :
 *      First will enter the cycle first ( or at the same time)
 *      In every iteration, distance increases by one 
 * 
 * 
 * Working of Phase II :
 *      Before first meeting: 
 *          Fast distance = 2 * ( slow distance )
 *          m + x + c * i = 2 * ( m + x + c * j )
 *          m + x = c * ( i -2j )
 *          m + x is a multiple of c
 *      
 *      i, j => Number of cycle iterations made by fast and slow respectively before they meet
 * 
 * 
 * 
 */

function findRepeatingEfficient(arr) {
        console.log("hi : ", arr)

    let slow = arr[0] + 1, fast = arr[0] + 1; 

    do {
        console.log("slow : ",slow)
        slow = arr[slow] + 1;
        fast = arr[arr[fast]] + 1;
    } while (slow != fast);

    slow = arr[0] + 1;
    while (slow != fast) {
        slow = arr[slow] + 1;
        fast = arr[fast] + 1;
    }
    return slow - 1;
}

let arr2 = [ 0, 2, 1, 3, 5, 4, 6, 2 ];

console.log("output : ",findRepeatingEfficient(arr2));