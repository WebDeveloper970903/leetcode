## 01/14

 > question
    
    Get index of two parameters in nums array that those sum is equal with target number.
    
 > solusion
    ```
     * * var twoSum = function(nums, target) {
        let res = [];
        for( let i = 0 ; i < nums.length ; i++)
            {
                if((nums.indexOf(target-nums[i])!=-1)&&(nums.indexOf(nums[i])!=nums.lastIndexOf(target-nums[i]))){
                    res = [nums.indexOf(nums[i]),nums.lastIndexOf(target-nums[i])];
                    break;
                }
            }
        return res;
    }; * *
    ```
