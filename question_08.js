class TreeNode {
    constructor(val) {
      this.val = val;
      this.left = this.right = null;
    }
  }
  
  function printTree(root) {
    // Get the number of levels in the tree
    function getLevels(node) {
      if (!node) return 0;
      return 1 + Math.max(getLevels(node.left), getLevels(node.right));
    }
  
    const levels = getLevels(root);
    const rows = levels;
    const cols = Math.pow(2, levels) - 1;
    
    // Create the formatted layout matrix
    const res = new Array(rows).fill("").map(() => new Array(cols).fill(""));
  
    // Helper function to fill the matrix recursively
    function fillMatrix(node, row, left, right) {
      if (!node) return;
  
      const mid = Math.floor((left + right) / 2);
      res[row][mid] = String(node.val);
  
      fillMatrix(node.left, row + 1, left, mid - 1);
      fillMatrix(node.right, row + 1, mid + 1, right);
    }
  
    fillMatrix(root, 0, 0, cols - 1);
    return res;
  }