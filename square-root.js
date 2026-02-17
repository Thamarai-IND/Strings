// naive solution


/**
 * To find the floor of the square root, try with all-natural numbers starting from 1. 
 * Continue incrementing the number until the square of that number is greater than the given number.
 * 
    Input: x = 4
    Output: 2
    Explanation: The square root of 4 is 2.

    Input: x = 11
    Output: 3
    Explanation:  The square root of 11 lies in between 3 and 4 so floor of the square root is 3.
    * 
 */
function floorSqrt(x) {
  if (x === 0 || x === 1) {
    return x;
  }
  let i = 1, result = 1;
  while (result <= x) {
    i++;
    result = i * i;
  }
  return i - 1;
}

console.log(floorSqrt(11)); // 3

// Time Complexity: O(√X). Only one traversal of the solution is needed, so the time complexity is O(√X).
// Auxiliary Space: O(1).