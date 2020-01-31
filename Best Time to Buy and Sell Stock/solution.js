var maxProfit = function(prices) {
    let i = 0, j = 0, maxP = 0, diff;
    
    for(let k = 1; k < prices.length; k++){
        if(prices[k] < prices[i]) i= k;
        else {
             j = k;
        }
        
        if(j > i) {
            diff = prices[j] - prices[i];
            if(diff > maxP) maxP = diff;
        }
    }
    
    return maxP;
};

// Example 1:

// Input: [7,1,5,3,6,4]
// Output: 5
// Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
//              Not 7-1 = 6, as selling price needs to be larger than buying price.
// Example 2:

// Input: [7,6,4,3,1]
// Output: 0
// Explanation: In this case, no transaction is done, i.e. max profit = 0.