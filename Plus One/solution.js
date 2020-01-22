var plusOne = function(digits) {
    let i = digits.length-1;
    if (digits[i] === 9){
        while( digits[i] === 9 ){
            digits[i] = 0;
            i--;
        }
        if( i === -1){
            digits.splice(0,0,1);
            return digits;
        }else{
            digits[i] += 1;
            return digits;
        }
    }else{
        digits[i] += 1;
        return digits;
    }
};

// Input: [4,3,2,1]
// Output: [4,3,2,2]
// Explanation: The array represents the integer 4321.

// Input: [9,9,9]
// Output: [1,0,0,0]
// Explanation: The array represents the integer 999.