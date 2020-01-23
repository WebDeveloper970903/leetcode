var climbStairs = function(n) {
    var i = 0, a = 0, b = 1, res = 0;
    while(i <= n - 1){
        res = a + b;
        a = b;
        b = res;
        i++;
    }
    return res;
};

// input  	2	3	4	5	6	7
// output	2	3	5	8	13	21