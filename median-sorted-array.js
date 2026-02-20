// Method to find median
function Median(A, B) {
  let n = A.length;
  let m = B.length;
  if (n > m) {
    return Median(B, A);
  }

  let start = 0;
  let end = n;
  let realmidinmergedarray = Math.floor((n + m + 1) / 2);

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    let leftAsize = mid;
    let leftBsize = realmidinmergedarray - mid;
    let leftA = leftAsize > 0 ? A[leftAsize - 1] : Number.MIN_SAFE_INTEGER;
    let leftB = leftBsize > 0 ? B[leftBsize - 1] : Number.MIN_SAFE_INTEGER;
    let rightA = leftAsize < n ? A[leftAsize] : Number.MAX_SAFE_INTEGER;
    let rightB = leftBsize < m ? B[leftBsize] : Number.MAX_SAFE_INTEGER;

    if (leftA <= rightB && leftB <= rightA) {
      if ((m + n) % 2 === 0) {
        return (Math.max(leftA, leftB) + Math.min(rightA, rightB)) / 2;
      }
      return Math.max(leftA, leftB);
    } else if (leftA > rightB) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  return 0;
}

// Driver code
let arr1 = [-5, 3, 6, 12, 15];
let arr2 = [-12, -10, -6, -3, 4, 10];
console.log("Median of the two arrays are");
console.log(Median(arr1, arr2));