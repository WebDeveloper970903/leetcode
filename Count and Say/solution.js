var countAndSay = function(n) {
    var res = [1];
    while ( n >= 2 ){
        var temp = res;
        res = [];
        var len = 1;
        for( var i = 0 ; i < temp.length ; i++ ){
            if(temp[i] == temp[i+1] ){
                len++;
            } else {
                res.push(len,temp[i]);
                len = 1;
            }
        }
        n--;
    }
    return res.join("");
};


// input: 6
// Output: "312211"
        