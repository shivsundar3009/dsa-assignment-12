function countLessOrEqual(matrix, mid) {
    const n = matrix.length;
    let count = 0;
    let row = n - 1;
    let col = 0;
  
    while (row >= 0 && col < n) {
      if (matrix[row][col] <= mid) {
        count += row + 1; // All elements in the current column up to 'row' are less than or equal to mid
        col++;
      } else {
        row--;
      }
    }
  
    return count;
  }
  
  function kthSmallest(matrix, k) {
    const n = matrix.length;
    let left = matrix[0][0];
    let right = matrix[n - 1][n - 1];
  
    while (left < right) {
      const mid = Math.floor((left + right) / 2);
      const count = countLessOrEqual(matrix, mid);
  
      if (count < k) {
        left = mid + 1;
      } else {
        right = mid;
      }
    }
  
    return left;
  }
  
  // Exampl