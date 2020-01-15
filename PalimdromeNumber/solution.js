var isPalindrome = function(x) {
    if ( x == 0 ) {
        return true;
    } else if ( x % 10 == 0 || x < 0 ) {
            return false;
        } else {
            var s = String(x);
            s = s.split("").reverse().join("");
            return Number(s)==x?true:false;
        }
};


// Example 1:

// 	Input: 121
// 	Output: true


// Example 2:

// 	Input: -121
// 	Output: false
// 	Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.


// Example 3:

// 	Input: 10
// 	Output: false
// 	Explanation: Reads 01 from right to left. Therefore it is not a palindrome.