class TreeNode {
    constructor(val) {
      this.val = val;
      this.left = this.right = null;
    }
  }
  
  function isSymmetric(root) {
    if (!root) return true;
  
    function isMirror(leftNode, rightNode) {
      if (!leftNode && !rightNode) return true;
      if (!leftNode || !rightNode) return false;
  
      return (
        leftNode.val === rightNode.val &&
        isMirror(leftNode.left, rightNode.right) &&
        isMirror(leftNode.right, rightNode.left)
      );
    }
  
    return isMirror(root.left, root.right);
  }
  
  
  
  
  
  