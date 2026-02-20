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
