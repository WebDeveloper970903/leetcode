var getRow = function(rowIndex) {
    if (rowIndex == 0) {
      return [1];
    }
    else {
        var row = [1];
        previousRow = getRow(rowIndex - 1);
        for (let i = 0; i < previousRow.length - 1; i++) {
          row.push(previousRow[i] + previousRow[i + 1]);
        }
        row.push(1);
    } 
    return row;
};

// Example:

// Input: 3
// Output: [1,3,3,1]