var levelOrderBottom = function(root) {
      var res = [];
      var queue = [[root, 0]];
      var level = 0;
      var node = null;

      while (queue.length) {
        [node, level] = queue.shift();
        if (node) {
          if (res.length < level + 1) res.unshift([]);
          res[res.length - level - 1].push(node.val);
          queue.push([node.left, level + 1]);
          queue.push([node.right, level + 1]);
        }
      }

      return res;
};

// Given binary tree [3,9,20,null,null,15,7],
//     3
//    / \
//   9  20
//     /  \
//    15   7
// return its bottom-up level order traversal as:
// [
//   [15,7],
//   [9,20],
//   [3]
// ]