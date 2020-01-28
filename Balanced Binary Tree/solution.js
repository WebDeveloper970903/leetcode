var isBalanced = function(root) {
    if (root === null) return true;
    if (checkHeight(root) === -1) {
      return false;
    } else {
      return isBalanced(root.left) && isBalanced(root.right);
    }
};

var checkHeight = function (root) {
    if (root === null) return 0;
    var leftHeight = checkHeight(root.left);
    var rightHeight = checkHeight(root.right);
    var heightDifference = leftHeight - rightHeight;
    if (Math.abs(heightDifference) > 1) {
      return -1;
    } else {
      return Math.max(leftHeight, rightHeight) + 1;
    }
  }


//   Example 1:

// Given the following tree [3,9,20,null,null,15,7]:

//     3
//    / \
//   9  20
//     /  \
//    15   7