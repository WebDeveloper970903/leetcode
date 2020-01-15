var romanToInt = function(s) {
    var roman = ["I","V","X","L","C","D","M"];
    var num = [1,5,10,50,100,500,1000];
    var res = 0;
    s.split("").map( (r,index) => {
        console.log(index+r+num[roman.indexOf(r)]);
        if ( index+1 == s.split("").length ) {
            res = res + num[roman.indexOf(r)]
        } else {
            if ( roman.indexOf(r) >= roman.indexOf(s[index+1]) ) {
                res = res + num[roman.indexOf(r)];
            } else {
                res = res - num[roman.indexOf(r)];
            }
        }
        
    })
    return res;
};



// Example 1:

//     Input: "III"
//     Output: 3


// Example 2:

//     Input: "IV"
//     Output: 4


// Example 3:

//     Input: "IX"
//     Output: 9


// Example 4:

//     Input: "LVIII"
//     Output: 58
//     Explanation: L = 50, V= 5, III = 3.

    
// Example 5:

//     Input: "MCMXCIV"
//     Output: 1994
//     Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.