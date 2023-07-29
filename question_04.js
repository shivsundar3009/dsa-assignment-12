class TreeNode {
    constructor(val) {
      this.val = val;
      this.left = this.right = null;
    }
  }
  
  function diameterOfBinaryTree(root) {
    let diameter = 0;
  
    function dfs(node) {
      if (!node) return 0;
  
      // Calculate the depths of the left and right subtrees
      const leftDepth = dfs(node.left);
      const rightDepth = dfs(node.right);
  
      // Update the diameter if the current node's subtree has a longer path
      diameter = Math.max(diameter, leftDepth + rightDepth);
  
      // Return the depth of the current node's subtree (including the current node itself)
      return 1 + Math.max(leftDepth, rightDepth);
    }
  
    dfs(root);
    return diameter;
  }