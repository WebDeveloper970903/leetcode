var strStr = function(haystack, needle) {
    var res = 0;
    if(needle == ""){
       return 0;
    }
    for (var i = 0 ; i < haystack.length ; i++ ){
        for ( var j = 0 ; j < needle.length ; j++ ){
            if(haystack[i+j] == needle[j]){
                res++;
            } else {
               res = 0;
                break;
            }
        }
        if(res == needle.length){
            return i;
        }
    }
    return -1;
};



// input : 
//         "hedfelloll"
//         "ll"
// output : 5    