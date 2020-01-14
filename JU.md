## 01/14

 > question
    
    Get index of two elements in nums array that those sum is equal with target number.
    
 > solusion
 
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
    
 > question
    
    Reverse number if revrese result is longer than 32 bit return zero.
    
 > solusion
 
     var reverse = function(x) {
        let str = "" + Math.abs(x);
        str = str.split("").reverse().join("");
        if(x>0){
            return str*(1) < (Math.pow(2,31)-1)?str*(1):0;
        }else{
            return str*(-1) > (0-Math.pow(2,31))?str*(-1):0;
        }
    };
    
