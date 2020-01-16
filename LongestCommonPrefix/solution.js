var longestCommonPrefix = function(strs) {
    var res = "";
    var count = 1;
    if (strs == ""){
        return "";
    } else {
         for ( var i = 0 ; i < strs[0].length ; i++ ){
            for ( var j = 1 ; j < strs.length ; j++ ){
                if ( strs[0][i] == strs[j][i] ){
                    count += 1;
                } else {
                    break;
                }
            }
            if ( count == strs.length ){
                res += strs[0][i];
                count = 1;
            } else {
                break;
            }
        }
        return res;
    }
};


// Example 1:

//     Input: ["flower","flow","flight"]
//     Output: "fl"

    
// Example 2:

//     Input: ["dog","racecar","car"]
//     Output: ""
//     Explanation: There is no common prefix among the input strings.