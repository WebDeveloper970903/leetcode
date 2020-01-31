var generate = function(numRows) {
    if(numRows === 0) return [];
    let res = [];
     
    for(let i = 0; i < numRows; i++){
        res[i] = new Array(i + 1);
        res[i][0] = res[i][i] = 1;
        
        for(let j = 1; j < i; j++){
            res[i][j] = res[i - 1][j - 1] + res[i - 1][j];
        }
    }
    return res;
};

// Input: 5
// Output:
// [
//      [1],
//     [1,1],
//    [1,2,1],
//   [1,3,3,1],
//  [1,4,6,4,1]
// ]