var mySqrt = function(x) {
    var res = 0;
    while( res*res <= x ){
        res++;
    }
    return res-1;
};

// Example 1:

// Input: 4
// Output: 2


// Example 2:

// Input: 8
// Output: 2
// Explanation: The square root of 8 is 2.82842..., and since 
//              the decimal part is truncated, 2 is returned.