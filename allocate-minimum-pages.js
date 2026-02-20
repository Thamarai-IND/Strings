// Naive Approach

const sum = (arr, b, e) => {
  let s = 0;
  for (let i = b; i <= e; i++) {
    s += arr[i];
  }
  return s;
};

const minPages = (arr, n, k) => {
  if (k === 1) {
    return sum(arr, 0, n - 1);
  }
  if (n === 1) {
    return arr[0];
  }
  let res = Number.MAX_SAFE_INTEGER;
  for (let i = 1; i < n; i++) {
    res = Math.min(res, Math.max(minPages(arr, i, k - 1), sum(arr, i, n - 1)));
  }
  return res;
};

const arr = [10, 20, 10, 30];
const n = arr.length;
const k = 2;

console.log(minPages(arr, n, k));

// Efficient Solution

// JavaScript program for optimal allocation of pages

// Utility function to check if current minimum value
// is feasible or not.
function isPossible(arr, n, m, curr_min) {
  let studentsRequired = 1;
  let curr_sum = 0;

  // iterate over all books
  for (let i = 0; i < n; i++) {
    // check if current number of pages are greater
    // than curr_min that means we will get the result
    // after mid no. of pages
    if (arr[i] > curr_min) return false;

    // count how many students are required
    // to distribute curr_min pages
    if (curr_sum + arr[i] > curr_min) {
      // increment student count
      studentsRequired++;

      // update curr_sum
      curr_sum = arr[i];

      // if students required becomes greater
      // than given no. of students,return false
      if (studentsRequired > m) return false;
    }

    // else update curr_sum
    else curr_sum += arr[i];
  }
  return true;
}

// function to find minimum pages
function findPages(arr, n, m) {
  let sum = 0;

  // return -1 if no. of books is less than
  // no. of students
  if (n < m) return -1;

  // Count total number of pages
  for (let i = 0; i < n; i++) sum += arr[i];

  // initialize start as 0 pages and end as
  // total pages
  let start = 0;
  let end = sum;
  let result = Number.MAX_SAFE_INTEGER;

  // traverse until start <= end
  while (start <= end) {
    // check if it is possible to distribute
    // books by using mid as current minimum
    let mid = Math.floor((start + end) / 2);
    if (isPossible(arr, n, m, mid)) {
      // update result to current distribution
      // as it's the best we have found till now.
      result = mid;

      // as we are finding minimum and books
      // are sorted so reduce end = mid -1
      // that means
      end = mid - 1;
    } else {
      // if not possible means pages should be
      // increased so update start = mid + 1
      start = mid + 1;
    }
  }

  // at-last return minimum no. of pages
  return result;
}

// Drivers code
let array = [12, 34, 67, 90];
let num = arr.length;
let m = 2; // No. of students

console.log("Minimum number of pages = " + findPages(array, num, m));