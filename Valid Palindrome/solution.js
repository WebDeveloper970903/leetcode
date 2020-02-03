/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    if (s.length < 1) 
        return true;
    
    s = s.replace(/[^a-zA-Z0-9]/g,"").toLowerCase();
    let l = s.length-1; 
    
    for(let i = 0; i <= l; i++){
        if (s[i] !== s[l])
            return false;
        else
            l--;
    } 
    
    return true
    
};

// Your input
//         "A man, a plan, a canal: Panama"
// stdout
//         amanaplanacanalpanama
// Output
//         true
// Expected
//         true