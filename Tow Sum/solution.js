var twoSum = function(nums, target) {
        let res = [];
        for( let i = 0 ; i < nums.length ; i++)
            {
                if( ( nums.indexOf( target-nums[i] ) != -1 ) && 
                    ( nums.indexOf( nums[i] ) != nums.lastIndexOf( target-nums[i] ) ) 
                  ){
                    res = [nums.indexOf(nums[i]), nums.lastIndexOf( target-nums[i] )];
                    break;
                }
            }
        return res;
    }; 


    // Given nums = [2, 7, 11, 15], target = 9,

    // Because nums[0] + nums[1] = 2 + 7 = 9,
    // return [0, 1].