var isValid = function(s) {
    var str = ["(",")","{","}","[","]"];
    var num = [1,-1,2,-2,3,-3];
    var list = [];
    
    for (var i = 0; i < s.length ; i++) {
        var temp = s[i];
        if (str.indexOf(temp) != (-1)) {
            var strpos = str.indexOf(temp);
            if (num[strpos]>0) {
                list.push(temp);
            } else {
                if ( num[strpos]+num[str.indexOf(list.pop())] != 0 ) {
                    return false;
                }
            }
        }
    }
    if (list.length==0){
        return true;
    } else {
        return false;
    }
};


// Example 1:

//     Input: "()"
//     Output: true


// Example 2:

//     Input: "()[]{}"
//     Output: true

// Example 3:

//     Input: "(]"
//     Output: false


// Example 4:

//     Input: "([)]"
//     Output: false

    
// Example 5:

//     Input: "{[]}"
//     Output: true
