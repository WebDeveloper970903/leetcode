var hasPathSum = function(root, sum) {
    if( root == null ) return false;
    if(root.val == sum && root.left == null && root.right == null) return true;
    var getsum = function(root, sum) {
        if( root == null ) return false;
        if(root.val == sum && root.left == null && root.right == null) return true;
        return getsum(root.left, sum-root.val)||getsum(root.right, sum-root.val)
    };
    return getsum(root, sum);
};

// Example:

// Given the below binary tree and sum = 22,

//       5
//      / \
//     4   8
//    /   / \
//   11  13  4
//  /  \      \
// 7    2      1
// return true, as there exist a root-to-leaf path 5->4->11->2 which sum is 22.