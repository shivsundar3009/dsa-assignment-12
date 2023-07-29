class TreeNode {
    constructor(val) {
      this.val = val;
      this.left = this.right = null;
    }
  }
  
  function invertTree(root) {
    if (!root) return null;
  
    // Swap the left and right subtrees
    const temp = root.left;
    root.left = root.right;
    root.right = temp;
  
    // Recursively invert the left and right subtrees
    invertTree(root.left);
    invertTree(root.right);
  
    return root;
  }