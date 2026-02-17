// Recursive binary Search

function recursiveBinarySearch(arr,x,low,high) {

    if(low > high) return -1;
    let mid = Math.floor((low + high)/2);

    if(arr[mid] == x) {
        return mid; // if mid 5 means at 5th index array holding the search value so it returns the index of the searching value.
    }
    else if(arr[mid] < x) {
       return recursiveBinarySearch(arr,x,mid+1,high);
    }
    else {
        return recursiveBinarySearch(arr,x,low,mid-1);
    }
    // else if(arr[mid] > x) {
    //    return recursiveBinarySearch(arr,x,low,mid-1);
    // }
    // else {
    //     return recursiveBinarySearch(arr,x,mid+1,high);
    // }
    // you can use either any of this else if condition it will work closely.
    return -1;
}

let array = [10, 20, 30, 40, 50, 60, 70];
let x = 20;
let low = 0;
let high = array.length - 1;
const response = recursiveBinarySearch(array,x,low,high);
console.log(response); // index at 1



/**
 * In this case iterative solution is better than recursive because overhead of more function calls but it will not use the auxiliary space in recursive, 
 * even iterative solution occupies the auxiliary space but it won't make more than one function calls.
 */