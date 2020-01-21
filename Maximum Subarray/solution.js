var maxSubArray = function(nums) {
    let a1 = 0;
    let a2 = nums[0];
    nums.forEach((i,a) => {
        a1 = Math.max(i, a1 + i);
        a2 = Math.max(a2, a1);
    })
    return a2;
};


// Input: [-2,1,-3,4,-1,2,1,-5,4],
// Output: 6
// Explanation: [4,-1,2,1] has the largest sum = 6.