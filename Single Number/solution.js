var singleNumber = function(nums) {
    let res = [];
    nums.map(row => {
        if( res.indexOf(row) === -1){
            res.push(row);
        } else {
            res.splice(res.indexOf(row),1);
        }
    });
    return res.toString();
};

// Example 1:

// Input: [2,2,1]
// Output: 1
// Example 2:

// Input: [4,1,2,1,2]
// Output: 4