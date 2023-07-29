
let findClosestElements = function(arr, k, x) {
  const n = arr.length;
  let left = 0;
  let right = n - 1;

  // Binary search to find the position of x in the array (or its insertion point)
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] === x) {
      left = mid;
      break;
    } else if (arr[mid] < x) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  // Initialize pointers based on the position of x or its closest element
  let start = Math.max(0, left - k);
  let end = Math.min(n - 1, left + k);

  // Expand the window to get the k closest elements
  while (end - start > k - 1) {
    if (x - arr[start] <= arr[end] - x) {
      end--;
    } else {
      start++;
    }
  }

  // Return the k closest elements
  return arr.slice(start, end + 1);
    
};