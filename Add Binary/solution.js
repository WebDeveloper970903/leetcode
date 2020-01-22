var addBinary = function(a, b) {
    var first = a.split("").reverse();
    var sec = b.split("").reverse();
    var res = [];
    var self = 0;
    var up = 0;
    var len = first.length>sec.length?first.length:sec.length;
    for( var i = 0 ; i < len ; i++ ){
        if( i > (first.length-1) ){
            first[i] = 0;
        } else if( i > (sec.length-1) ){ sec[i]=0; }
        self = (first[i]*1+sec[i]*1+up)%2;
        up = Math.floor((first[i]*1+sec[i]*1+up)/2);
        res.push(self);
    }
    if( up != 0 ){
        res.push(up);
    }
    return res.reverse().join("");
};


// Example 1:

// Input: a = "11", b = "1"
// Output: "100"

// Example 2:

// Input: a = "1010", b = "1011"
// Output: "10101"