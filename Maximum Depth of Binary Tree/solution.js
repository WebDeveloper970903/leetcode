var maxDepth = function(root) {
    if(root == null) return 0;
    return 1+Math.max(maxDepth(root.left),maxDepth(root.right));
};

// Given binary tree [3,9,20,null,null,15,7],

//     3
//    / \
//   9  20
//     /  \
//    15   7
// return its depth = 3.