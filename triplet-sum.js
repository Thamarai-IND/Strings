// naive solution

/**
 * 
 * Find if there is a triplet pair with sum X in a sorted array
 * Input: arr = [ 2, 5, 8, 12, 30 ] and Sum X = 25
 * Output: result = TRUE; // [ 5, 8, 12 ] - Pair found which is equal to the Sum
 * 
 * Input: arr = [ 3, 6, 8, 10, 13, 18 ] and Sum X = 31
 * Output: result = TRUE; // [ 8, 10, 13 ] - Pair found which is equal to the Sum
 * 
 * Input: arr = [ 3, 6, 8, 10, 13, 18 ] and Sum X = 18
 * Output: result = FALSE; // [ ] - No Pair found to match the Sum
 * 
 * 
 */
let arr = [ 2, 3, 5, 6, 15 ];
let sum = 14
function isTripletNaive(arr,sum) {
    let n = arr.length;

    for(let i=0; i<n-2; i++) {
        for(let j=i+1; j<n-1; j++) {
            for(let k=j+1; k<n; k++) {
                if((arr[i]+arr[j]+arr[k]) == sum)
                    return true;
            }
        }
    }
    return false;
}

console.log(isTripletNaive(arr,sum) ? 'Pair found ': ' Pair not found ');