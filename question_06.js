function kthLargestNumber(nums, k) {
    // Custom sorting function to compare numbers in descending order
    nums.sort((a, b) => parseInt(b) - parseInt(a));
  
    return nums[k - 1]; // kth largest integer (string representation)
  }
  