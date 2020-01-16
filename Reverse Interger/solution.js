var reverse = function(x) {
        let str = "" + Math.abs(x);
        str = str.split("").reverse().join("");
        if(x>0){
            return str*(1) < (Math.pow(2,31)-1)?str*(1):0;
        }else{
            return str*(-1) > (0-Math.pow(2,31))?str*(-1):0;
        }
    };



    // Example 1:

    //     Input: 123
    //     Output: 321

    // Example 2:

    //     Input: -123
    //     Output: -321

    // Example 3:

    //     Input: 120
    //     Output: 21

    // Note:
    //     Assume we are dealing with an environment which could only store integers within the 32-bit signed integer range: [−231,  231 − 1]. For the purpose of this problem, assume that your function returns 0 when the reversed integer overflows.