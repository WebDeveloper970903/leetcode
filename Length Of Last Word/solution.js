var lengthOfLastWord = function(s) {
    var len = 0;
    if( s === ""){
        return 0;
    }
    for( var i = s.length - 1 ; i >= 0 ; i--){
        if(s[i] !== " "){
            len++;
        }
        if( (s[i] === " ") && (len !== 0) ){
            return len;
        }
    }
    return len;
};



// Input: "Hello World"
// Output: 5