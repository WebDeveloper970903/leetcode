var removeElement = function(nums, val) {
    for ( let i = 0 ; i < nums.length ; i++ ){
        if(nums[i] == val){
            nums.splice(i,1);
            i -= 1;
        }
    }
    return nums.length;
};


// input 
// 	nums: [3,3,3,4,2,6,3,3,3,4,5,1,3,3,3]
// 	val:	3
// 	output:  [4,2,6,4,5,1]