var isSymmetric = function(root) {
    if(root == null )
        return true;
    var isSameTree = function(p, q) {
        if (p === null && q === null) return true;
        if (p === null || q === null) return false;
        return (p.val === q.val) && isSameTree(p.left, q.right) && isSameTree(p.right, q.left);
    };
    return isSameTree(root.left,root.right)
};

// [1,2,2,3,4,4,3] is symmetric:

//     1
//    / \
//   2   2
//  / \ / \
// 3  4 4  3
 
// [1,2,2,null,3,null,3] is not:

//     1
//    / \
//   2   2
//    \   \
//    3    3