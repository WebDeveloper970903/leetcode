var searchInsert = function(nums, target) {
	for ( var i = 0 ; i < nums.length ; i++ ){
		if ( nums[i] > target ){
			nums.splice(i,0,target);
			return i;
		} else if ( nums[i] == target ){
			return i;
		}
	}
	nums.splice(nums.length,0,target);
	return nums.length-1;
};


// Example 1:

//         Input: [1,3,5,6], 5
//         Output: 2


// Example 2:

//         Input: [1,3,5,6], 2
//         Output: 1


// Example 3:

//         Input: [1,3,5,6], 7
//         Output: 4


// Example 4:

//         Input: [1,3,5,6], 0
//         Output: 0